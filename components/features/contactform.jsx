// 'use client'
// import { useState } from 'react';
// import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// export default function ContactForm({ relatedToOptions }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     relatedTo: '',
//     query: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.mobile.trim()) {
//       newErrors.mobile = 'Mobile number is required';
//     } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.mobile.replace(/\s/g, ''))) {
//       newErrors.mobile = 'Please enter a valid mobile number';
//     }

//     if (!formData.relatedTo) {
//       newErrors.relatedTo = 'Please select what your query is related to';
//     }

//     if (!formData.query.trim()) {
//       newErrors.query = 'Please describe your query';
//     } else if (formData.query.trim().length < 10) {
//       newErrors.query = 'Please provide more details (at least 10 characters)';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // In a real app, you would send the data to your backend
//       console.log('Form submitted:', formData);
      
//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         mobile: '',
//         relatedTo: '',
//         query: ''
//       });
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
//       <div className="flex items-center mb-6">
//         <Send className="w-6 h-6 text-purple-600 mr-3" />
//         <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
//       </div>

//       {/* Success Message */}
//       {submitStatus === 'success' && (
//         <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
//           <div className="flex items-center">
//             <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
//             <div>
//               <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
//               <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Error Message */}
//       {submitStatus === 'error' && (
//         <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
//           <div className="flex items-center">
//             <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
//             <div>
//               <h4 className="font-semibold text-red-800">Something went wrong</h4>
//               <p className="text-red-700 text-sm">Please try again or email us directly.</p>
//             </div>
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name Field */}
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Enter your full name"
//           />
//           {errors.name && (
//             <p className="mt-1 text-sm text-red-600">{errors.name}</p>
//           )}
//         </div>

//         {/* Email Field */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//             Email Address *
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Enter your email address"
//           />
//           {errors.email && (
//             <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//           )}
//         </div>

//         {/* Mobile Field */}
//         <div>
//           <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
//             Mobile Number *
//           </label>
//           <input
//             type="tel"
//             id="mobile"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.mobile ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Enter your mobile number"
//           />
//           {errors.mobile && (
//             <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
//           )}
//         </div>

//         {/* Related To Field */}
//         <div>
//           <label htmlFor="relatedTo" className="block text-sm font-medium text-gray-700 mb-2">
//             Related To *
//           </label>
//           <select
//             id="relatedTo"
//             name="relatedTo"
//             value={formData.relatedTo}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
//               errors.relatedTo ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//           >
//             {relatedToOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//           {errors.relatedTo && (
//             <p className="mt-1 text-sm text-red-600">{errors.relatedTo}</p>
//           )}
//         </div>

//         {/* Query Field */}
//         <div>
//           <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
//             Your Query *
//           </label>
//           <textarea
//             id="query"
//             name="query"
//             rows={5}
//             value={formData.query}
//             onChange={handleInputChange}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
//               errors.query ? 'border-red-300 bg-red-50' : 'border-gray-300'
//             }`}
//             placeholder="Please describe your query in detail. The more information you provide, the better we can help you."
//           />
//           <div className="flex justify-between items-center mt-1">
//             {errors.query && (
//               <p className="text-sm text-red-600">{errors.query}</p>
//             )}
//             <p className="text-sm text-gray-500 ml-auto">
//               {formData.query.length}/500 characters
//             </p>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
//             isSubmitting
//               ? 'bg-gray-400 cursor-not-allowed'
//               : 'bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
//           } text-white`}
//         >
//           {isSubmitting ? (
//             <div className="flex items-center justify-center">
//               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//               Sending Message...
//             </div>
//           ) : (
//             <div className="flex items-center justify-center">
//               <Send className="w-5 h-5 mr-2" />
//               Send Message
//             </div>
//           )}
//         </button>
//       </form>

//       {/* Form Footer */}
//       <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//         <p className="text-sm text-gray-600 text-center">
//           <strong>Note:</strong> All fields marked with * are required. 
//           We typically respond within 24 hours during business days.
//         </p>
//       </div>
//     </div>
//   );
// }



'use client'
// components/features/ContactFormClient.jsx
import { useEffect } from 'react';

export default function ContactFormClient() {
  useEffect(() => {
    // Wait for DOM to be ready and check if elements exist
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const queryCharCount = document.getElementById('query-char-count');
    const queryInput = document.getElementById('query');

    // If essential elements don't exist, return early
    if (!form || !submitBtn || !queryCharCount || !queryInput) {
      console.warn('Essential form elements not found');
      return;
    }

    let isSubmitting = false;

    // Character count for query field
    const updateQueryCharCount = () => {
      if (!queryInput || !queryCharCount) return;
      const length = queryInput.value.length;
      queryCharCount.textContent = `${length}/500 characters`;
      if (length > 500) {
        queryCharCount.className = 'text-sm text-red-500 ml-auto';
      } else if (length > 450) {
        queryCharCount.className = 'text-sm text-orange-500 ml-auto';
      } else {
        queryCharCount.className = 'text-sm text-gray-500 ml-auto';
      }
    };

    // Error handling
    const showError = (fieldName, message) => {
      const errorElement = document.getElementById(`${fieldName}-error`);
      const inputElement = document.getElementById(fieldName);
      
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
      }
      
      if (inputElement) {
        inputElement.classList.add('border-red-300', 'bg-red-50');
        inputElement.classList.remove('border-gray-300');
      }
    };

    const clearError = (fieldName) => {
      const errorElement = document.getElementById(`${fieldName}-error`);
      const inputElement = document.getElementById(fieldName);
      
      if (errorElement) {
        errorElement.classList.add('hidden');
      }
      
      if (inputElement) {
        inputElement.classList.remove('border-red-300', 'bg-red-50');
        inputElement.classList.add('border-gray-300');
      }
    };

    // Clear errors when user starts typing
    const setupInputListeners = () => {
      const fields = ['name', 'email', 'mobile', 'relatedTo', 'query'];
      fields.forEach(fieldName => {
        const input = document.getElementById(fieldName);
        if (input) {
          input.addEventListener('input', () => clearError(fieldName));
          input.addEventListener('change', () => clearError(fieldName));
        }
      });
    };

    // Form validation
    const validateForm = () => {
      let isValid = true;
      
      // Clear all previous errors
      ['name', 'email', 'mobile', 'relatedTo', 'query'].forEach(clearError);

      // Name validation
      const name = document.getElementById('name').value.trim();
      if (!name) {
        showError('name', 'Name is required');
        isValid = false;
      } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
      }

      // Email validation
      const email = document.getElementById('email').value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        showError('email', 'Email is required');
        isValid = false;
      } else if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
      }

      // Mobile validation
      const mobile = document.getElementById('mobile').value.trim();
      const mobileRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
      if (!mobile) {
        showError('mobile', 'Mobile number is required');
        isValid = false;
      } else if (!mobileRegex.test(mobile.replace(/\s/g, ''))) {
        showError('mobile', 'Please enter a valid mobile number (at least 10 digits)');
        isValid = false;
      }

      // Related To validation
      const relatedTo = document.getElementById('relatedTo').value;
      if (!relatedTo) {
        showError('relatedTo', 'Please select what your query is related to');
        isValid = false;
      }

      // Query validation
      const query = document.getElementById('query').value.trim();
      if (!query) {
        showError('query', 'Please describe your query');
        isValid = false;
      } else if (query.length < 10) {
        showError('query', 'Please provide more details (at least 10 characters)');
        isValid = false;
      } else if (query.length > 500) {
        showError('query', 'Query must not exceed 500 characters');
        isValid = false;
      }

      return isValid;
    };

    // Form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (isSubmitting) return;
      
      if (!validateForm()) return;

      isSubmitting = true;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <div class="flex items-center justify-center">
          <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Sending Message...
        </div>
      `;
      submitBtn.className = submitBtn.className.replace('bg-gray-900 hover:bg-gray-800', 'bg-gray-400 cursor-not-allowed');

      try {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Contact form submitted:', data);
        
        // Show success message
        if (successMessage) {
          successMessage.classList.remove('hidden');
        }
        if (errorMessage) {
          errorMessage.classList.add('hidden');
        }
        
        // Reset form
        form.reset();
        updateQueryCharCount();
        
        // Scroll to success message
        successMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
      } catch (error) {
        console.error('Contact form error:', error);
        if (errorMessage) {
          errorMessage.classList.remove('hidden');
        }
        if (successMessage) {
          successMessage.classList.add('hidden');
        }
        
        // Scroll to error message
        errorMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
      } finally {
        isSubmitting = false;
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <div class="flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Send Message
          </div>
        `;
        submitBtn.className = submitBtn.className.replace('bg-gray-400 cursor-not-allowed', 'bg-gray-900 hover:bg-gray-800');
      }
    };

    // Event listeners
    form?.addEventListener('submit', handleSubmit);
    queryInput?.addEventListener('input', updateQueryCharCount);
    
    // Set up input listeners for real-time error clearing
    setupInputListeners();

    // Initialize
    updateQueryCharCount();

    // Auto-hide success/error messages after some time
    const autoHideMessages = () => {
      setTimeout(() => {
        if (successMessage && !successMessage.classList.contains('hidden')) {
          successMessage.classList.add('hidden');
        }
        if (errorMessage && !errorMessage.classList.contains('hidden')) {
          errorMessage.classList.add('hidden');
        }
      }, 10000); // Hide after 10 seconds
    };

    // Form field enhancements
    const enhanceFormFields = () => {
      // Add real-time mobile number formatting
      const mobileInput = document.getElementById('mobile');
      if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
          let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
          if (value.length > 0) {
            // Format based on length (simple formatting)
            if (value.length <= 10) {
              value = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
          }
          // Don't update if it would make the input invalid
          if (value.length <= 15) { // Reasonable mobile number length limit
            e.target.value = value;
          }
        });
      }

      // Add visual feedback for email validation
      const emailInput = document.getElementById('email');
      if (emailInput) {
        emailInput.addEventListener('blur', () => {
          const email = emailInput.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (email && !emailRegex.test(email)) {
            emailInput.classList.add('border-orange-300');
            emailInput.classList.remove('border-gray-300');
          } else if (email && emailRegex.test(email)) {
            emailInput.classList.add('border-green-300');
            emailInput.classList.remove('border-gray-300', 'border-orange-300');
          }
        });
      }
    };

    enhanceFormFields();

    // Cleanup function
    return () => {
      form?.removeEventListener('submit', handleSubmit);
      queryInput?.removeEventListener('input', updateQueryCharCount);
      
      // Clean up input listeners
      const fields = ['name', 'email', 'mobile', 'relatedTo', 'query'];
      fields.forEach(fieldName => {
        const input = document.getElementById(fieldName);
        if (input) {
          input.removeEventListener('input', () => clearError(fieldName));
          input.removeEventListener('change', () => clearError(fieldName));
        }
      });
    };
  }, []);

  return null; // This component only adds interactivity
}