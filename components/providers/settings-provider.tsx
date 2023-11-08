"use client";
import { useEffect, useState } from "react";
import { SettingsModal } from "../models/SettingsModals";
import CoverImageModals from "../models/CoverImageModals";

const SettingsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SettingsModal />
      <CoverImageModals />
    </>
  );
};

export default SettingsProvider;
