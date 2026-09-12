---
title: "AI Marketing Research Agent for AEO/GEO Visibility Research"
category: "FlyRank"
status: "Completed"
problem: "AI search visibility decisions were being made using confidently written content and vendor statistics that could not be traced to a verifiable source, creating a real risk of recommendations built on unverified claims."
approach: "Configured a Claude Project as a dedicated research agent with persistent instructions and live web search. Completed four real, full research requests during testing. After the first two, added a four-tier evidence classification (Verified, Vendor Claim, Interpretation, Unresolved) so every finding is labeled by how trustworthy it is. Defined five formal test cases for future stress-testing, not yet run. Scoped the agent to research and writing only, with no publishing or external action without explicit approval."
outcome: "Findings: live search consistently returned current, dated sources. The agent reliably separated independent or primary sources from vendor sources and flagged vendor claims rather than blending them in as fact. When credible sources disagreed, it reported the disagreement instead of picking a side. Most publicly available AEO/GEO statistics traced back to a single vendor rather than an independently confirmed number, a real limitation of this research area, not of the tool. Recommendation: any AI-assisted research on AI search visibility should go through this same verified/vendor/interpretation/unresolved check before it informs a client-facing recommendation. Result: four real research requests were completed end to end, each with live citations, and one was packaged into a standalone portfolio-ready research brief. Agent configuration and sample output are documented; this project does not have a public code repository."
tools: ["Claude", "Web Search", "Source Verification", "AEO", "GEO", "AI Visibility Research"]
---

A dedicated research agent configured to investigate AI search visibility with verified source citations and a four-tier evidence classification system to ensure findings are traceable and trustworthy.
