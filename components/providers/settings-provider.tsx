"use client";
import { useEffect, useState } from "react";
import { SettingsModal } from "../models/SettingsModals";

const SettingsProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <SettingsModal />;
};

export default SettingsProvider;
