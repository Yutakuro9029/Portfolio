"use client";

import { useState, useRef, useEffect } from "react";
import SectionHeading from "./SectionHeading";

type Metric = { value: string; label: string };

type Project = {
  id: "ppe" | "rag" | "gpt" | "ml";
  title: string;
  category: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  keyHighlights: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
};

const projectsData: Project[] = [
  {
    id: "ppe",
    title: "PPE Compliance Detector & Production API",
    category: "Computer Vision / MLOps & Cloud",
    tagline:
      "End-to-end automated workplace safety compliance system served through a production-grade CI/CD pipeline.",
    overview:
      "A complete computer vision system engineered to verify hard-hat compliance in high-risk construction environments. Built from fine-tuning state-of-the-art YOLO architectures to deploying a hardened REST API service behind strict CI/CD gates.",
    challenge:
      "Bridging the discrepancy between prototype detection and production inference. Initial testing suffered from subtle RGB/BGR color channel inversions between OpenCV and inference engines, leading to erratic false negatives on site photos.",
    solution:
      "Engineered an input preprocessing pipeline ensuring strict channel-order alignment, and containerized the service using Docker. Designed a GitHub Actions pipeline enforcing automated pytest test suites and health-check verifications before pushing production images to Render and AWS ECS.",
    metrics: [
      { value: "89.6%", label: "mAP@0.5 Detection Score" },
      { value: "139 ms", label: "Production Avg Latency" },
      { value: "86.1%", label: "Inference Precision" },
      { value: "85.3%", label: "Recall Rate" },
    ],
    keyHighlights: [
      "FastAPI architecture with robust Pydantic payload validation and /health, /metrics monitoring endpoints",
      "Automated CI/CD deployment: Zero-downtime builds with passing unit and integration tests",
      "Interactive Streamlit web dashboard allowing instant batch image testing and threshold tuning",
      "Multi-cloud deployment testing across Render container runners and AWS ECS clusters",
    ],
    techStack: [
      "YOLO26",
      "FastAPI",
      "PyTorch",
      "Docker",
      "GitHub Actions",
      "AWS ECS",
      "Streamlit",
      "pytest",
      "OpenCV",
    ],
    githubUrl: "https://github.com/Yutakuro9029/ppe-detector-api",
    demoUrl: "https://ppe-detector-pvryehxw8pqyfzea5ekytv.streamlit.app",
  },
  {
    id: "rag",
    title: "Enterprise Hybrid RAG Document Intelligence",
    category: "Generative AI / Information Retrieval",
    tagline:
      "Context-aware document Q&A combining semantic search and sparse lexical ranking to eliminate LLM hallucinations.",
    overview:
      "A production-grade Retrieval-Augmented Generation assistant enabling real-time Q&A across uploaded documents. Utilizes a hybrid sparse-dense retrieval architecture to deliver grounded answers backed by source citations.",
    challenge:
      "Dense vector search alone frequently fails on domain-specific keywords, acronyms, and alphanumeric codes, while generating high inference latencies under dense-only reranking architectures.",
    solution:
      "Implemented a hybrid retrieval strategy fusing BM25 lexical search with dense sentence-transformer embeddings using Reciprocal Rank Fusion (RRF). Decoupled the generation layer with an interchangeable provider interface supporting local Ollama models and cloud APIs without code modification.",
    metrics: [
      { value: "83.3%", label: "Retrieval Accuracy (+5.5% vs Dense)" },
      { value: "17 ms", label: "Query Latency (Optimized from 23ms)" },
      { value: "100%", label: "Source-verifiable citations" },
      { value: "0 Code Change", label: "Local / Cloud LLM switching" },
    ],
    keyHighlights: [
      "Dynamic PDF parsing and real-time chunking directly into ChromaDB vector collections",
      "Reciprocal Rank Fusion (RRF) pipeline outperforming standalone vector and BM25 systems",
      "Support for local privacy-first models (Gemma 3 via Ollama) and ultra-fast cloud inference (Groq/OpenAI)",
      "Granular vector store controls allowing direct knowledge-base purging and cache inspection",
    ],
    techStack: [
      "Python",
      "ChromaDB",
      "BM25",
      "sentence-transformers",
      "RRF",
      "Ollama",
      "Groq",
      "OpenAI",
      "Streamlit",
    ],
    githubUrl: "https://github.com/Yutakuro9029/my-rag-chatbot",
  },
  {
    id: "gpt",
    title: "GPT Transformer Architecture from First Principles",
    category: "Deep Learning / Neural Systems",
    tagline:
      "Custom Decoder-only Transformer coded from scratch in raw PyTorch without high-level abstraction libraries.",
    overview:
      "An in-depth reconstruction of the GPT generative architecture to master transformer dynamics from mathematical foundations to CUDA-accelerated model convergence and text synthesis.",
    challenge:
      "Overfitting on smaller text corpora and stabilizing autoregressive generation across multi-head causal attention blocks without relying on prebuilt HuggingFace layers.",
    solution:
      "Hand-coded Scaled Dot-Product Attention, causal triangular masks, multi-head projections, and learned positional embeddings. Integrated custom validation loss checkpoints to preserve optimal weights at the minimum of the loss curve.",
    metrics: [
      { value: "15.6M", label: "Model Parameters" },
      { value: "1.41", label: "Best Validation Loss" },
      { value: "100%", label: "Pure PyTorch (No HF Layers)" },
      { value: "Step 4000", label: "Optimal Checkpoint" },
    ],
    keyHighlights: [
      "Implemented causal masking and custom multi-head self-attention mechanisms directly in PyTorch tensors",
      "Interactive Streamlit web interface featuring real-time temperature, top-k sampling, and token generation controls",
      "Visualized training dynamics, attention heatmaps, and learning-rate decay schedules",
      "Automated weight serialization and best-checkpoint fallback mechanisms",
    ],
    techStack: [
      "PyTorch",
      "Python",
      "Google Colab",
      "CUDA",
      "Streamlit",
      "Custom Tokenizer",
    ],
    githubUrl: "https://github.com/Yutakuro9029/GPT-From-Scratch",
    demoUrl: "https://gpt-fiction-generator.streamlit.app/",
  },
  {
    id: "ml",
    title: "Classical ML Algorithms: NumPy vs. Scikit-Learn",
    category: "Machine Learning / Mathematical Foundations",
    tagline:
      "Algorithmic proof of machine learning fundamentals built with vector mathematics and benchmarked against industry standards.",
    overview:
      "An empirical mathematical study rebuilding core supervised learning algorithms in pure NumPy, demonstrating analytical parity against Scikit-Learn while analyzing algorithmic efficiency and the bias-variance tradeoff.",
    challenge:
      "Understanding gradient convergence stability, matrix vectorized backpropagation, and loss surface behavior without external autodiff engines.",
    solution:
      "Derived and implemented analytical cost functions, gradient descent updates, and regularization penalties from scratch. Rigorously verified predictions on synthetic datasets and the Titanic survival benchmark.",
    metrics: [
      { value: "≈ 0", label: "MSE Gap to Scikit-Learn" },
      { value: "100%", label: "Vectorized Pure NumPy" },
      { value: "3 Ensembles", label: "Benchmarked (DT, RF, GBDT)" },
      { value: "Zero", label: "External Autodiff Dependency" },
    ],
    keyHighlights: [
      "Vectorized Linear & Logistic Regression with L1/L2 regularization implemented from mathematical formulas",
      "Empirical analysis of the Bias-Variance tradeoff across Decision Trees, Random Forests, and Gradient Boosting",
      "Complete, self-contained, reproducible Jupyter Notebook environment with full output visualizations",
      "Mathematical proof of convergence matching industry-standard framework results",
    ],
    techStack: [
      "NumPy",
      "Scikit-Learn",
      "Python",
      "Pandas",
      "Matplotlib",
      "Jupyter",
    ],
    githubUrl:
      "https://github.com/Yutakuro9029/Classical-ML-From-Scratch-vs.-Scikit-learn",
  },
];

export default function ProjectsBento() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProj = projectsData[selectedIdx];

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentTab = tabsRef.current[selectedIdx];
    if (currentTab) {
      currentTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIdx]);

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="scroll-mt-14 py-20 border-t border-zinc-200/60"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <SectionHeading
          title="Featured Projects"
          blurb="End-to-end AI systems with verifiable benchmarks, architectural decisions, and production-grade code."
        />

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {projectsData.map((p, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabsRef.current[idx] = el;
                  }}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-zinc-900 text-white shadow-sm"
                      : "bg-white border border-zinc-200/80 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isSelected
                        ? "bg-emerald-400"
                        : "bg-zinc-300 group-hover:bg-zinc-400"
                    }`}
                  />
                  <span>{p.title.split(":")[0].split("&")[0].trim()}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="font-mono text-xs text-zinc-400 mr-1">
              {selectedIdx + 1} / {projectsData.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 active:scale-95"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* Featured Project Showcase Container */}
        <article className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-7 sm:p-9 shadow-sm transition-all">
          {/* Header & Action Links */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-zinc-100 pb-6">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                {activeProj.category}
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                {activeProj.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 font-medium">
                {activeProj.tagline}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-zinc-100 pb-6">
              {activeProj.demoUrl && (
                <a
                  href={activeProj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-zinc-900 px-3.5 py-1.5 text-xs font-mono font-medium text-white shadow-sm transition-all hover:bg-zinc-800"
                >
                  Live Demo ↗
                </a>
              )}
              <a
                href={activeProj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-mono font-medium text-zinc-700 shadow-sm transition-all hover:border-zinc-400 hover:text-zinc-900"
              >
                GitHub Repo ↗
              </a>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="my-7">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
              Performance & Verification Metrics
            </h4>
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {activeProj.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-zinc-100 bg-zinc-50/70 p-4 transition-all"
                >
                  <dd className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                    {m.value}
                  </dd>
                  <dt className="mt-1 text-[11px] font-medium leading-tight text-zinc-500">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Deep Technical Breakdown (Challenge & Solution) */}
          <div className="space-y-5 rounded-xl border border-zinc-100 bg-zinc-50/40 p-5 sm:p-6 mb-7 text-xs leading-relaxed text-zinc-600">
            <div>
              <p className="font-semibold text-zinc-900 mb-1">
                Architecture & Overview
              </p>
              <p>{activeProj.overview}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-zinc-200/50">
              <div>
                <span className="font-semibold text-zinc-900 block mb-1">
                  Engineering Challenge
                </span>
                <p>{activeProj.challenge}</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-900 block mb-1">
                  Implemented Solution
                </span>
                <p>{activeProj.solution}</p>
              </div>
            </div>
          </div>

          {/* Key Features / Implementation Highlights */}
          <div className="mb-7">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3">
              System Highlights & Engineering Implementation
            </h4>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {activeProj.keyHighlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-zinc-700 leading-relaxed rounded-lg border border-zinc-100/80 bg-white p-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-6 border-t border-zinc-100">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[11px] text-zinc-400 mr-2">
                Stack:
              </span>
              {activeProj.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 font-mono text-[11px] text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
