import React from "react";
import { motion, px } from "framer-motion";
import { Grid, Typography, Button, Box } from "@mui/material";
import profile from "../images/profile.jpeg";
import resume from "../Resume/cv.pdf";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(27, 26, 26)",
        color: "#fff",
        height: "100%",          // ✅ fills parent flex space
        display: "flex",
        alignItems: "center",    // ✅ vertical center
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{
          p: { xs: 2, md: 19 },   // ✅ padding: 2 units on mobile, 12 units (~96px) on desktop
          columnGap: { xs: 2, md: 6 }, // ✅ smaller gap on mobile, larger on desktop
        }}
      >
        <Grid item xs={12} md={5} textAlign="center">
          <motion.img
            src={profile}
            alt="Prasanna Kumar Ganesan"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(255,255,255,0.2)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
              Hi I'm <span style={{ color: "#ddd" }}>Prasanna Kumar</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#ddd", mb: 3, maxWidth: "600px", fontSize: "19px" }}
            >
              Lead Data Engineer with 9+ years of experience in designing scalable data engineering
              solutions, ETL/ELT pipelines, and Azure lakehouse platforms using Azure Databricks,
              Azure Data Factory (ADF), PySpark, and Delta Lake. Expertise in data modelling, Spark
              performance tuning, cloud migrations, and production CI/CD for enterprise data platforms
              across banking and fintech domains. Experienced in implementing modern Medallion
              (Bronze–Silver–Gold) architectures and governed data platforms using Unity Catalog. Open
              to immediate relocation to the UAE.
            </Typography>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#38bdf8",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              View My CV
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>

  );
}
