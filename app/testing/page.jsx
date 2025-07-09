// 'use client';

// import { useState } from 'react';
// import { Download, Play, Pause, Maximize, Sparkles, Video } from 'lucide-react';

// const SnapchatDownloader = () => {
//   const [url, setUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [videoData, setVideoData] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [videoRef, setVideoRef] = useState(null);
//   const [error, setError] = useState('');

//   const validateUrl = (inputUrl) => {
//     return inputUrl.includes('snapchat.com/spotlight/') && inputUrl.includes('spotlight');
//   };

//   const handleDownload = async () => {
//     if (!url.trim()) {
//       setError('Please enter a valid Snapchat Spotlight URL');
//       return;
//     }

//     if (!validateUrl(url)) {
//       setError('Please enter a valid Snapchat Spotlight URL containing "spotlight"');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       // TODO: Replace this with your actual API call
//       // const response = await fetchVideoData(url);
//       // setVideoData(response);
      
//       // Mock response for demonstration - replace with your actual API call
//       const mockResponse = {
//         mediaUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
//         downloadUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
//         title: 'Snapchat Spotlight Video',
//         thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xMjUgMTc1TDE3NSAyMDBMMTI1IDIyNVYxNzVaIiBmaWxsPSIjOUIxMDNBIi8+CjwvZz4KPC9zdmc+'
//       };
      
//       setVideoData(mockResponse);
//     } catch (err) {
//       setError('Failed to fetch video. Please check the URL and try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVideoDownload = async () => {
//     if (!videoData?.downloadUrl) return;

//     try {
//       // TODO: Replace this with your actual download API call
//       // await downloadVideo(videoData.downloadUrl);
      
//       // Mock download functionality - replace with your actual API call
//       const link = document.createElement('a');
//       link.href = videoData.downloadUrl;
//       link.download = 'snapchat-video.mp4';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (err) {
//       setError('Failed to download video. Please try again.');
//     }
//   };

//   const resetForm = () => {
//     setUrl('');
//     setVideoData(null);
//     setError('');
//     setIsLoading(false);
//   };

//   const togglePlayPause = () => {
//     if (videoRef) {
//       if (isPlaying) {
//         videoRef.pause();
//       } else {
//         videoRef.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (videoRef) {
//       if (videoRef.requestFullscreen) {
//         videoRef.requestFullscreen();
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 mt-6">
//           <div className="flex items-center justify-center mb-10">
//             <Video className="w-8 h-8 text-white md:mr-6 mr-3 mt-1" />
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               Snapchat Video Downloader
//             </h1>
//           </div>
//           <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//             Download your favorite Spotlight videos from Snapchat by entering the username or profile link. 
//             Quick, easy, and completely free!
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className={`grid grid-cols-1 ${videoData ? "lg:grid-cols-2" : "lg:grid-cols-1 lg:max-w-4xl lg:mx-auto"} gap-8 mb-12 w-full`}>
//           {/* Left Panel - Input */}
//           <div className="space-y-6">
//             {/* URL Input */}
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
//               <label className="block text-sm font-medium text-slate-200 mb-4">
//                 Enter Snapchat Spotlight URL
//               </label>
              
//               <div className="space-y-4">
//                 <textarea
//                   value={url}
//                   onChange={(e) => setUrl(e.target.value)}
//                   placeholder="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYeGpkc255dnRuAZYed12IAZYed11vAAAAAQ?share_id=K6XIK9t890s&locale=en-GB"
//                   rows={3}
//                   className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
//                   disabled={isLoading}
//                 />
                
//                 {error && (
//                   <div className="text-red-400 text-sm p-3 bg-red-900/20 border border-red-800 rounded-lg">
//                     {error}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Download Button */}
//             <button
//               onClick={handleDownload}
//               disabled={isLoading || !url.trim()}
//               className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   <span>Downloading...</span>
//                 </>
//               ) : (
//                 <>
//                   <Sparkles className="w-5 h-5" />
//                   <span>Download Video</span>
//                 </>
//               )}
//             </button>
//           </div>

//           {/* Right Panel - Video Player */}
//           {videoData && (
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-medium text-slate-200">
//                   Video Preview
//                 </h3>
//                 <button
//                   onClick={resetForm}
//                   className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
//                 >
//                   Download New
//                 </button>
//               </div>

//               <div className="w-full max-w-[280px] mx-auto">
//                 <div className="aspect-[9/16] bg-slate-900/50 rounded-xl flex items-center justify-center border border-slate-600/50 mb-4 overflow-hidden">
//                   <video
//                     ref={setVideoRef}
//                     src={videoData.mediaUrl}
//                     poster={videoData.thumbnail}
//                     className="w-full h-full object-cover rounded-xl"
//                     controls
//                     onPlay={() => setIsPlaying(true)}
//                     onPause={() => setIsPlaying(false)}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </div>

//               {/* Download Button */}
//               <button
//                 onClick={handleVideoDownload}
//                 className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
//               >
//                 <Download className="w-5 h-5" />
//                 <span>Download Video</span>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* How to Guide */}
//         <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
//           <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">
//             How to Download Video from Snapchat
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <span className="text-purple-400 font-bold text-xl">1</span>
//               </div>
//               <h3 className="font-semibold text-slate-200 mb-2">
//                 Copy the Spotlight URL
//               </h3>
//               <p className="text-slate-400 text-sm">
//                 Open Snapchat, find your desired Spotlight video, tap the share button, and copy the link.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <span className="text-purple-400 font-bold text-xl">2</span>
//               </div>
//               <h3 className="font-semibold text-slate-200 mb-2">
//                 Paste the URL
//               </h3>
//               <p className="text-slate-400 text-sm">
//                 Paste the Snapchat Spotlight URL into the input field above and click the Download button.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <span className="text-purple-400 font-bold text-xl">3</span>
//               </div>
//               <h3 className="font-semibold text-slate-200 mb-2">
//                 Download and Enjoy
//               </h3>
//               <p className="text-slate-400 text-sm">
//                 Preview the video and click "Download Video" to save it to your device.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-600/50">
//             <h4 className="font-semibold text-slate-200 mb-2">💡 Pro Tips:</h4>
//             <ul className="text-slate-200 text-sm space-y-1">
//               <li>• Make sure the URL contains "spotlight" in the path</li>
//               <li>• Copy the complete URL including all parameters</li>
//               <li>• Only public Spotlight videos can be downloaded</li>
//               <li>• Videos are downloaded in their original quality</li>
//             </ul>
//           </div>
//         </div>

//         {/* FAQs */}
//         <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
//           <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">
//             Frequently Asked Questions
//           </h2>
          
//           <div className="space-y-6">
//             <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
//               <h3 className="text-lg font-semibold text-slate-200 mb-3">
//                 Is it safe to download videos from Snapchat?
//               </h3>
//               <p className="text-slate-400">
//                 Yes, our tool is completely safe and secure. We don't store any of your data or downloaded videos. 
//                 The process is entirely client-side and respects your privacy.
//               </p>
//             </div>
            
//             <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
//               <h3 className="text-lg font-semibold text-slate-200 mb-3">
//                 What format are the downloaded videos?
//               </h3>
//               <p className="text-slate-400">
//                 Videos are downloaded in MP4 format with the original quality preserved. 
//                 This ensures compatibility with all devices and media players.
//               </p>
//             </div>
            
//             <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
//               <h3 className="text-lg font-semibold text-slate-200 mb-3">
//                 Can I download any Snapchat video?
//               </h3>
//               <p className="text-slate-400">
//                 You can download publicly available Spotlight videos. Private content or stories 
//                 require appropriate permissions and may not be accessible through this tool.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SnapchatDownloader;









'use client';

import { useState } from 'react';
import { Download, Play, Pause, Maximize, Sparkles, Video } from 'lucide-react';

const SnapchatDownloader = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);
  const [error, setError] = useState('');

  const validateUrl = (inputUrl) => {
    return inputUrl.includes('snapchat.com/spotlight/') && inputUrl.includes('spotlight');
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError('Please enter a valid Snapchat Spotlight URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid Snapchat Spotlight URL containing "spotlight"');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // TODO: Replace this with your actual API call
      // const response = await fetchVideoData(url);
      // setVideoData(response);
      
      // Mock response for demonstration - replace with your actual API call
      const mockResponse = {
        mediaUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        downloadUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        title: 'Snapchat Spotlight Video',
        thumbnail: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xMjUgMTc1TDE3NSAyMDBMMTI1IDIyNVYxNzVaIiBmaWxsPSIjOUIxMDNBIi8+CjwvZz4KPC9zdmc+'
      };
      
      setVideoData(mockResponse);
    } catch (err) {
      setError('Failed to fetch video. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoDownload = async () => {
    if (!videoData?.downloadUrl) return;

    try {
      // TODO: Replace this with your actual download API call
      // await downloadVideo(videoData.downloadUrl);
      
      // Mock download functionality - replace with your actual API call
      const link = document.createElement('a');
      link.href = videoData.downloadUrl;
      link.download = 'snapchat-video.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError('Failed to download video. Please try again.');
    }
  };

  const resetForm = () => {
    setUrl('');
    setVideoData(null);
    setError('');
    setIsLoading(false);
  };

  const togglePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef) {
      if (videoRef.requestFullscreen) {
        videoRef.requestFullscreen();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-6">
          <div className="flex items-center justify-center mb-10">
            <Video className="w-8 h-8 text-white md:mr-6 mr-3 mt-1" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Snapchat Video Downloader
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Download your favorite Spotlight videos from Snapchat by entering the username or profile link. 
            Quick, easy, and completely free!
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 ${videoData ? "lg:grid-cols-2" : "lg:grid-cols-1 lg:max-w-4xl lg:mx-auto"} gap-8 mb-12 w-full`}>
          {/* Left Panel - Input */}
          <div className="space-y-6">
            {/* URL Input */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <label className="block text-sm font-medium text-slate-200 mb-4">
                Enter Snapchat Spotlight URL
              </label>
              
              <div className="space-y-4">
                <textarea
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYeGpkc255dnRuAZYed12IAZYed11vAAAAAQ?share_id=K6XIK9t890s&locale=en-GB"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  disabled={isLoading}
                />
                
                {error && (
                  <div className="text-red-400 text-sm p-3 bg-red-900/20 border border-red-800 rounded-lg">
                    {error}
                  </div>
                )}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={isLoading || !url.trim()}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Download Video</span>
                </>
              )}
            </button>
          </div>

          {/* Right Panel - Video Player */}
          {videoData && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-slate-200">
                  Video Preview
                </h3>
                <button
                  onClick={resetForm}
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Download New
                </button>
              </div>

              <div className="w-full max-w-[280px] mx-auto">
                <div className="aspect-[9/16] bg-slate-900/50 rounded-xl flex items-center justify-center border border-slate-600/50 mb-4 overflow-hidden">
                  <video
                    ref={setVideoRef}
                    src={videoData.mediaUrl}
                    poster={videoData.thumbnail}
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleVideoDownload}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Video</span>
              </button>
            </div>
          )}
        </div>

        {/* How to Guide */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
          <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">
            How to Download Video from Snapchat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Copy the Spotlight URL
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Open Snapchat, find your desired Spotlight video, tap the share button, and copy the link.
              </p>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-600/50">
                <img 
                  src="https://howpremium.com/wp-content/uploads/2023/09/Follow-473x1024.png" 
                  alt="Step 1 - Open Snapchat and find Spotlight video"
                  className="w-24 h-auto mx-auto rounded-lg border border-slate-600/50"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Paste the URL
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Paste the Snapchat Spotlight URL into the input field above and click the Download button.
              </p>
              <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-600/50">
                <img 
                  src="https://howpremium.com/wp-content/uploads/2023/11/5207E8FD-0105-4C57-ACD1-EE4061A8B269.png" 
                  alt="Step 2 - Tap share button and copy link"
                  className="w-24 h-auto mx-auto rounded-lg border border-slate-600/50"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Download and Enjoy
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Preview the video and click "Download Video" to save it to your device.
              </p>
              <div className="bg-slate-900/50 rounded-xl border border-slate-600/50">
                <img 
                  src="https://howpremium.com/wp-content/uploads/2023/11/IMG_3791.png" 
                  alt="Step 3 - Copy the link and use downloader"
                  className="w-auto h-auto rounded-lg border border-slate-600/50"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-900/50 rounded-xl border border-slate-600/50">
            <h4 className="font-semibold text-slate-200 mb-2">💡 Pro Tips:</h4>
            <ul className="text-slate-200 text-sm space-y-1">
              <li>• Make sure the URL contains "spotlight" in the path</li>
              <li>• Copy the complete URL including all parameters</li>
              <li>• Only public Spotlight videos can be downloaded</li>
              <li>• Videos are downloaded in their original quality</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                Is it safe to download videos from Snapchat?
              </h3>
              <p className="text-slate-400">
                Yes, our tool is completely safe and secure. We don't store any of your data or downloaded videos. 
                The process is entirely client-side and respects your privacy.
              </p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                What format are the downloaded videos?
              </h3>
              <p className="text-slate-400">
                Videos are downloaded in MP4 format with the original quality preserved. 
                This ensures compatibility with all devices and media players.
              </p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                Can I download any Snapchat video?
              </h3>
              <p className="text-slate-400">
                You can download publicly available Spotlight videos. Private content or stories 
                require appropriate permissions and may not be accessible through this tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapchatDownloader;