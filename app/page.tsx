"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, FileText, Copy, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [copyStatus1, setCopyStatus1] = useState(false)
  const [copyStatus2, setCopyStatus2] = useState(false)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const videoRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  const citation1 = `@article{ma2024towards,
  title={Towards a generalizable pathology foundation model via unified knowledge distillation},
  author={Ma, Jiabo and Guo, Zhengrui and Zhou, Fengtao and Wang, Yihui and Xu, Yingxue and Cai, Yu and Zhu, Zhengjie and Jin, Cheng and Lin, Yi and Jiang, Xinrui and others},
  journal={arXiv preprint arXiv:2407.18449},
  year={2024}
}`

  const citation2 = `@article{xu2024multimodal,
  title={A multimodal knowledge-enhanced whole-slide pathology foundation model},
  author={Xu, Yingxue and Wang, Yihui and Zhou, Fengtao and Ma, Jiabo and Jin, Cheng and Yang, Shu and Li, Jinbang and Zhang, Zhengyu and Zhao, Chenglong and Zhou, Huajun and others},
  journal={arXiv preprint arXiv:2407.15362},
  year={2024}
}`

  const handleCopy = (text, setCopyStatus) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus(true)
        setTimeout(() => setCopyStatus(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(243, 244, 246, 1)",
      borderRadius: "0.375rem", // 确保圆角在动画中保持
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      borderRadius: "0.375rem", // 确保圆角在点击动画中保持
    },
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        className="px-4 py-4 sticky top-0 z-10 bg-white/95 backdrop-blur-sm shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <motion.div
            className="h-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image src="/smartpath.github.io/logo.svg" alt="MEIntelligence Logo" width={160} height={50} priority />
          </motion.div>
          <div className="w-[160px]"></div> {/* Empty div for balance */}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          SmartPath: A Computational Pathology Platform Empowered by Large AI Models for Precision Oncology
        </motion.h1>

        {/* Paper Info Section */}
        <motion.section
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          {/* HuggingFace Icon Header */}
          <motion.div className="flex justify-center items-center mb-4" variants={fadeInUp}>
            <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378c0 1.112.178 2.181.503 3.185c.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284c.278.173.48.408.71.694c.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542c.01.026.653 1.552 1.657 2.54c.616.605 1.01 1.223 1.082 1.912c.055.537-.096 1.059-.38 1.572c.637.121 1.294.187 1.967.187c.657 0 1.298-.063 1.921-.178c-.287-.517-.44-1.041-.384-1.581c.07-.69.465-1.307 1.081-1.913c1.004-.987 1.647-2.513 1.657-2.539c.021-.074.083-.285.233-.542c.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952c.23-.286.432-.52.71-.694c.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174a1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094c-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71c-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013a1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921a.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164c1.607-.007 2.984-1.155 3.572-1.164c.196-.003.305.12.305.454c0 .886-.424 2.328-1.563 3.202c-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026l-.01.008l-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116a1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243a1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444c-.034-.016-.104-.008-.2.022q-.094.03-.216.087q-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096a3 3 0 0 0-.26.219a2 2 0 0 0-.12.121a2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203c0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194c-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858s-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64c-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647s2.822 2.813 2.562 3.244s-1.176-.506-1.176-.506s-2.866-2.567-3.49-1.898s.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405c-.238.839-2.71-1.587-3.216-.642c-.506.946 3.49 2.056 3.522 2.064c1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194c1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858s.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64c.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647s-2.822 2.813-2.562 3.244s1.176-.506 1.176-.506s2.866-2.567 3.49-1.898s-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405c.238.839 2.71-1.587 3.216-.642c.506.946-3.49 2.056-3.522 2.064c-1.29.33-4.568 1.028-5.713-.624" />
            </svg>
            <span className="text-lg font-medium">Model Resources</span>
          </motion.div>

          {/* Papers Section with models in a single row */}
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 mt-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* GPFM Resources Group */}
            <motion.div
              className="flex-1 bg-gray-50 p-4 rounded-lg"
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-md font-semibold mb-3">GPFM</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <motion.div variants={fadeInUp}>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    initial={{ borderRadius: "0.375rem" }}
                  >
                    <Link
                      href="https://arxiv.org/abs/2407.18449"
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 rounded-md text-sm transition-colors overflow-hidden border border-gray-200"
                    >
                      <FileText className="h-4 w-4 mr-1.5" />
                      Paper
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    initial={{ borderRadius: "0.375rem" }}
                  >
                    <Link
                      href="https://github.com/birkhoffkiki/GPFM/"
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 rounded-md text-sm transition-colors overflow-hidden border border-gray-200"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      GitHub
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    initial={{ borderRadius: "0.375rem" }}
                  >
                    <Link
                      href="https://huggingface.co/GPFM"
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 rounded-md text-sm transition-colors overflow-hidden border border-gray-200"
                    >
                      <svg
                        className="h-4 w-4 mr-1.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378c0 1.112.178 2.181.503 3.185c.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284c.278.173.48.408.71.694c.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542c.01.026.653 1.552 1.657 2.54c.616.605 1.01 1.223 1.082 1.912c.055.537-.096 1.059-.38 1.572c.637.121 1.294.187 1.967.187c.657 0 1.298-.063 1.921-.178c-.287-.517-.44-1.041-.384-1.581c.07-.69.465-1.307 1.081-1.913c1.004-.987 1.647-2.513 1.657-2.539c.021-.074.083-.285.233-.542c.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952c.23-.286.432-.52.71-.694c.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174a1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094c-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71c-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013a1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921a.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164c1.607-.007 2.984-1.155 3.572-1.164c.196-.003.305.12.305.454c0 .886-.424 2.328-1.563 3.202c-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026l-.01.008l-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116a1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243a1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444c-.034-.016-.104-.008-.2.022q-.094.03-.216.087q-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096a3 3 0 0 0-.26.219a2 2 0 0 0-.12.121a2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203c0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194c-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858s-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64c-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647s2.822 2.813 2.562 3.244s-1.176-.506-1.176-.506s-2.866-2.567-3.49-1.898s.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405c-.238.839-2.71-1.587-3.216-.642c-.506.946 3.49 2.056 3.522 2.064c1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194c1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858s.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64c.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647s-2.822 2.813-2.562 3.244s1.176-.506 1.176-.506s2.866-2.567 3.49-1.898s-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405c.238.839 2.71-1.587 3.216-.642c.506.946-3.49 2.056-3.522 2.064c-1.29.33-4.568 1.028-5.713-.624" />
                      </svg>
                      Model
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* mSTAR Resources Group */}
            <motion.div
              className="flex-1 bg-gray-50 p-4 rounded-lg"
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-md font-semibold mb-3">mSTAR</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <motion.div variants={fadeInUp}>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    initial={{ borderRadius: "0.375rem" }}
                  >
                    <Link
                      href="https://arxiv.org/abs/2407.15362"
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 rounded-md text-sm transition-colors overflow-hidden border border-gray-200"
                    >
                      <FileText className="h-4 w-4 mr-1.5" />
                      Paper
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    initial={{ borderRadius: "0.375rem" }}
                  >
                    <Link
                      href="https://github.com/Innse/mSTAR"
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 rounded-md text-sm transition-colors overflow-hidden border border-gray-200"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      GitHub
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                    initial={{ borderRadius: "0.375rem" }}
                  >
                    <Link
                      href="https://huggingface.co/mSTAR"
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 bg-white hover:bg-gray-100 rounded-md text-sm transition-colors overflow-hidden border border-gray-200"
                    >
                      <svg
                        className="h-4 w-4 mr-1.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378c0 1.112.178 2.181.503 3.185c.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284c.278.173.48.408.71.694c.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542c.01.026.653 1.552 1.657 2.54c.616.605 1.01 1.223 1.082 1.912c.055.537-.096 1.059-.38 1.572c.637.121 1.294.187 1.967.187c.657 0 1.298-.063 1.921-.178c-.287-.517-.44-1.041-.384-1.581c.07-.69.465-1.307 1.081-1.913c1.004-.987 1.647-2.513 1.657-2.539c.021-.074.083-.285.233-.542c.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952c.23-.286.432-.52.71-.694c.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174a1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094c-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71c-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013a1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921a.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164c1.607-.007 2.984-1.155 3.572-1.164c.196-.003.305.12.305.454c0 .886-.424 2.328-1.563 3.202c-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026l-.01.008l-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116a1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243a1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444c-.034-.016-.104-.008-.2.022q-.094.03-.216.087q-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096a3 3 0 0 0-.26.219a2 2 0 0 0-.12.121a2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203c0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194c-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858s-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64c-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647s2.822 2.813 2.562 3.244s-1.176-.506-1.176-.506s-2.866-2.567-3.49-1.898s.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405c-.238.839-2.71-1.587-3.216-.642c-.506.946 3.49 2.056 3.522 2.064c1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194c1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858s.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64c.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647s-2.822 2.813-2.562 3.244s1.176-.506 1.176-.506s2.866-2.567 3.49-1.898s-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405c.238.839 2.71-1.587 3.216-.642c.506.946 3.49 2.056 3.522 2.064c-1.29.33-4.568 1.028-5.713-.624" />
                      </svg>
                      Model
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Video Showcase Section */}
        <motion.section
          id="video"
          className="mb-16 max-w-4xl mx-auto"
          ref={videoRef}
          initial={{ opacity: 0 }}
          animate={isVideoVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ y: 50 }}
            animate={isVideoVisible ? { y: 0 } : { y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-video relative">
              <video className="w-full h-full object-cover" controls>
                <source src="/smartpath.github.io/1639_1745828331.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
                initial={{ opacity: 1 }}
                animate={isVideoVisible ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ pointerEvents: isVideoVisible ? "none" : "auto" }}
              >
                <motion.div
                  className="text-white text-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  <ChevronDown className="h-12 w-12 mx-auto" />
                  <p className="mt-2 text-lg font-medium">Scroll to view demo</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Citation Section */}
        <motion.section
          className="mb-16 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h2 className="text-2xl font-bold mb-4 border-b pb-2" variants={fadeInUp}>
            Citation
          </motion.h2>

          <motion.div className="space-y-6" variants={staggerContainer}>
            {/* Citation 1 */}
            <motion.div
              className="bg-gray-100 p-4 rounded-md"
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-medium mb-2">
                Towards a generalizable pathology foundation model via unified knowledge distillation
              </h3>
              <motion.div
                className="bg-white p-3 rounded border text-sm font-mono whitespace-pre-wrap overflow-x-auto"
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
              >
                {citation1}
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleCopy(citation1, setCopyStatus1)}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  <AnimatePresence mode="wait">
                    {copyStatus1 ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        Copy BibTeX
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </motion.div>

            {/* Citation 2 */}
            <motion.div
              className="bg-gray-100 p-4 rounded-md"
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-medium mb-2">
                A multimodal knowledge-enhanced whole-slide pathology foundation model
              </h3>
              <motion.div
                className="bg-white p-3 rounded border text-sm font-mono whitespace-pre-wrap overflow-x-auto"
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
              >
                {citation2}
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => handleCopy(citation2, setCopyStatus2)}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  <AnimatePresence mode="wait">
                    {copyStatus2 ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                      >
                        Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        Copy BibTeX
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>©Smartlab. All rights reserved.</p>
          <p className="mt-2">This demo page was created to showcase our research paper.</p>
        </div>
      </motion.footer>
    </div>
  )
}
