import React from "react";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

/**
 * Breadcrumb component (MUI)
 * - Auto-reads `window.location.pathname` into segments by default.
 * - Optional prop `segments` (string[]) to override when using client routing.
 *
 * Usage:
 *  <Breadcrum />                // uses current pathname
 *  <Breadcrum segments={['about', 'team']} />  // custom segments
 */

export default function Breadcrum({ segments: propSegments }) {
  const pathname =
    typeof window !== "undefined" && !propSegments ? window.location.pathname : "/";
  const segments =
    propSegments ??
    pathname
      .split("/")
      .filter(Boolean)
      .map((s) => decodeURIComponent(s));

  // build cumulative hrefs for each segment
  const toPath = (idx) => `/${segments.slice(0, idx + 1).join("/")}`;

  return (
    <Box
      component="nav"
      aria-label="breadcrumb"
      sx={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1400,
        display: "flex",
        alignItems: "center",
        bgcolor: "rgba(255,255,255,0.75)",
        color: "text.primary",
        px: 1,
        py: 0.5,
        borderRadius: 1,
        boxShadow: 3,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        maxWidth: "min(92vw, 640px)",
        overflow: "hidden",
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{
          ".MuiBreadcrumbs-ol": { alignItems: "center" },
        }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.95rem",
          }}
        >
          
          Home
        </Link>

        {segments.length === 0 ? (
          <Typography color="text.primary" sx={{ fontSize: "0.95rem" }}>
            Home
          </Typography>
        ) : (
          segments.map((seg, i) => {
            const isLast = i === segments.length - 1;
            // pretty label (replace dashes/underscores)
            const label = seg.replace(/[-_]/g, " ");
            return isLast ? (
              <Typography
                key={i}
                color="text.primary"
                sx={{ fontSize: "0.95rem", textTransform: "capitalize" }}
              >
                {label}
              </Typography>
            ) : (
              <Link
                key={i}
                underline="hover"
                color="inherit"
                href={toPath(i)}
                sx={{
                  fontSize: "0.95rem",
                  textTransform: "capitalize",
                }}
              >
                {label}
              </Link>
            );
          })
        )}
      </Breadcrumbs>
    </Box>
  );
}