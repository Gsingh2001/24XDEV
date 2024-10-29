import React from 'react';
import { Dialog } from '@headlessui/react';

const ContactUsModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold">Contact Us</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Fill in the form below to reach out to us.
          </Dialog.Description>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded p-2 w-full mb-4"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded p-2 w-full mb-4"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border rounded p-2 w-full mb-4"
              rows="4"
              required
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ContactUsModal;
