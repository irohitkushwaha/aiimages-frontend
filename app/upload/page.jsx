import UploadImageComponent from './UploadImageComponent';
export async function generateMetadata() {
  return {
    title: "Upload AI Generated Image - AI Generated Images",
    description:
      "Upload your AI-generated artwork with our community. Fill out the details below to upload your image.",
    robots: "index, follow",
  };
}

import React from 'react'

function page() {
  return (
    <div>
      <UploadImageComponent />
    </div>
  )
}

export default page
