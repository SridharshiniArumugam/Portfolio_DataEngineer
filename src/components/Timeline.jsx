import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

const timeline = [
  {
    year:  "Apr 2021 – Present",
    role: "Senior Associate - Cognizant",
    description: [
      " Architected and delivered ETL/ELT platforms — Azure Data Factory, PySpark ADLS Gen2; automated production data flows and improved analytics availability.",
      "Led architecture and rollout of a Bronze–Silver–Gold Lakehouse on Azure Databricks with Delta Lake, standardizing ingestion and supporting high‑volume reporting.",
      "Orchestrated Spark performance improvements with partitioning, caching,Z‑ordering, clustering, and query tuning, reducing pipeline runtime 50% and lowering compute costs.",
      "Established data governance with Unity Catalog, enabling end‑to‑end lineage and RBAC to secure sensitive datasets and support audits.",
      "Developed AI-based document processing solution using Databricks IDP (AI_EXTRACT, AI_PARSE) for unstructured PDF ingestion, achieving ~60% reduction in manual processing effort, ~80% error reduction, and ~120 hours/month operational savings in pilot deployment.",
      "Deployed production ETL orchestration and CI/CD — Lakeflow Declarative Pipelines, Lakeflow Jobs, DLT, and Databricks Asset Bundles (DAB) for versioned deployments."
    ]
  },
  {
    year: "Jan 2019 – Mar 2021",
    role: "Associate Consultant – Capgemini",
    description: [
      "Automated data ingestion via SOAP APIs/web services, reducing manual effort by 80%.",
      "Migrated Oracle Forms 10g → 12c, achieving 99.9% uptime during modernization.",
      "Optimized queries and indexing using execution‑plan analysis to improve query performance.",
      "Migrated databases on‑prem → OCI, reducing infrastructure costs 30%.",
      "Designed and maintained relational data models to ensure data integrity and normalization.",
      "Developed and supported data integration workflows for reliable validation, transformation, and delivery across enterprise systems."
    ]
  },
  {
    year: "Aug 2016 – Jan 2019",
    role: "Senior Process Associate – TCS",
    description: [
      "Performed technical design and analysis, producing schema designs, data mappings, and implementation specs for development and QA.",
      "Optimized SQL and indexing, reducing query execution time 40% through execution‑plan analysis and targeted tuning.",
      "Migrated Oracle → PostgreSQL (schema conversion, data migration scripts, validation, and cutover support) as a core developer on the migration team.",
      "Developed stored procedures and functions in PL/SQL / PL/pgSQL to encapsulate business logic and improve maintainability."
    ]
  }
];

export default function Timeline() {
  return (
    <section className="timeline">
      <h2 className="timeline-title">Career Timeline</h2>
      <div className="timeline-line">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-role">{item.role}</h3>
              <span className="timeline-year">{item.year}</span>
              <ul className="timeline-points">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
