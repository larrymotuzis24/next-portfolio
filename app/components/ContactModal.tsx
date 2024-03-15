import React from "react";

interface ContactFormProps {
  onClose: () => void; 
}

interface ContactFormProps {
  onClose: () => void; 
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const formSpreeURL = "https://formspree.io/f/xayrbkvk";

  return (
    <form action={formSpreeURL} method="POST" className="space-y-6 bg-white rounded-lg p-8 shadow-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows={4} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={onClose} className="mr-4 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Cancel</button>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send</button>
      </div>
    </form>
  );
};


export default ContactForm;