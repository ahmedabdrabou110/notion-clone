"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../models/SettingsModals";
import { CoverImageModal } from "../models/CoverImageModals";

export const ModalProvider = () => {
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
      <CoverImageModal />
    </>
  );
};