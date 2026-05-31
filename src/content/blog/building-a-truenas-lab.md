---
title: Building a small TrueNAS storage lab
description: Notes on storage testing, snapshots, monitoring, and backup habits for a compact lab.
pubDate: 2026-03-29
categories:
  - Homelab
---

A storage lab does not need to be complicated to be useful. It needs clear goals, boring hardware choices, and a repeatable maintenance routine.

The current TrueNAS setup is used to test snapshot policy, backup targets, and monitoring alerts before those ideas are trusted with more important data.

## What matters first

- Known-good drives with visible health reporting.
- Snapshot policy that matches the real recovery need.
- Alerts that someone will actually read.
- A restore test, not just a backup job.
