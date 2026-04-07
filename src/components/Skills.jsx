import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  // 🌐 Cloud Platforms
  { name: "Azure Databricks", description: "Unified analytics platform for big data and AI workloads." },
  { name: "Azure Data Factory (ADF)", description: "Cloud-based ETL service for data integration and orchestration." },
  { name: "Azure Data Lake Storage Gen2", description: "Scalable storage for big data analytics with hierarchical namespace." },

  // 🔧 Data Engineering
  { name: "ETL / ELT", description: "Data extraction, transformation, and loading for pipelines." },
  { name: "Lakehouse Architecture", description: "Combines data lake flexibility with warehouse performance." },
  { name: "Delta Lake", description: "Reliable data lake with ACID transactions and schema enforcement." },
  { name: "Delta Live Tables (DLT)", description: "Declarative pipelines for real-time data processing." },
  { name: "Medallion Architecture", description: "Layered data design (Bronze, Silver, Gold) for scalability." },
  { name: "Data Modelling", description: "Designing logical and physical structures for data systems." },
  { name: "Data Warehousing", description: "Centralized storage for structured analytics and reporting." },

  // 💻 Programming
  { name: "PySpark", description: "Distributed data processing with Python APIs for Spark." },
  { name: "Python", description: "Versatile programming language for data engineering and automation." },
  { name: "SQL / Spark SQL", description: "Query languages for relational and distributed datasets." },
  { name: "Unix", description: "Command-line environment for scripting and automation." },
  { name: "PL/SQL", description: "Oracle procedural extensions for SQL." },
  { name: "PL/pgSQL", description: "PostgreSQL procedural language for advanced queries." },

  // 🗄️ Databases
  { name: "Oracle", description: "Enterprise-grade relational database system." },
  { name: "PostgreSQL", description: "Open-source relational database with advanced features." },

  // ⚙️ Orchestration & CI/CD
  { name: "Lakeflow Declarative Pipelines", description: "Declarative orchestration for Databricks workflows." },
  { name: "Lakeflow Jobs", description: "Job scheduling and execution in Databricks Lakehouse." },
  { name: "Databricks Asset Bundles (DAB)", description: "Reusable deployment packages for Databricks projects." },
  { name: "Git", description: "Version control system for collaborative development." },
  { name: "GitHub Actions", description: "CI/CD automation workflows in GitHub." },
  { name: "GitLab CI/CD", description: "Pipeline automation for GitLab projects." },

  // 🔒 Governance & Optimization
  { name: "Unity Catalog", description: "Centralized governance for data and AI assets in Databricks." },
  { name: "Query Optimization", description: "Improving SQL performance with efficient execution plans." },
  { name: "Performance Tuning", description: "Optimizing workloads for speed and resource efficiency." },
  { name: "Partitioning", description: "Splitting datasets for faster queries and parallelism." },
  { name: "Z-Ordering", description: "Optimized data layout for faster queries in Delta Lake." },
  { name: "Vacuum", description: "Cleanup of obsolete files in Delta tables." },
  { name: "Liquid Clustering", description: "Adaptive clustering for balanced data distribution." },
];


export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
  {skills.map((skill, i) => (
    <motion.div
      key={i}
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-desc">{skill.description}</p>
    </motion.div>
  ))}
</div>
    </section>
  );
}


