"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/Button"

const CloseModal = () => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.back()}
      aria-label="close modal"
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
    >
      <X className="w-4 h-4" />
    </Button>
  )
}

export default CloseModal
