"use client"

import Editor from "@/components/editor"
import Loading from "@/components/loading"
import { LayerStore } from "@/lib/layer-store"
import { ImageStore } from "@/lib/store"
import { useEffect, useState } from "react"

export default function Home() {
  const [initialLayerId, setInitialLayerId] = useState("temp-id")

  useEffect(() => {
    setInitialLayerId(crypto.randomUUID())
  }, [])

  return (
    <ImageStore.Provider
      initialValue={{
        activeTag: "all",
        activeColor: "green",
        activeImage: "",
      }}
    >
      <LayerStore.Provider
        initialValue={{
          layerComparisonMode: false,
          layers: [
            {
              id: initialLayerId,
              url: "",
              height: 0,
              width: 0,
              publicId: "",
              name: "New Layer",
              format: "",
              resourceType: "image"
            },
          ],
        }}
      >
        <Editor />
      </LayerStore.Provider>
    </ImageStore.Provider>
  )
}
