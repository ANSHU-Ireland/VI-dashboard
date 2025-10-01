"use client";

import { useState } from "react";

export function CallsToAction() {
  const [showContributeDialog, setShowContributeDialog] = useState(false);
  const [showNotifyDialog, setShowNotifyDialog] = useState(false);

  return (
    <section className="space-y-8">
      <div className="bg-muted/30 rounded-2xl p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">Get Involved</h2>
        <p className="text-lg text-slate max-w-2xl mx-auto">
          Help build the infrastructure for truth in the AI era. Contribute research or stay updated on our progress.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => setShowContributeDialog(true)}
            className="bg-cobalt-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-opacity-90 transition-colors focus-visible"
          >
            Contribute Research
          </button>
          <button 
            onClick={() => setShowNotifyDialog(true)}
            className="border-2 border-cobalt-600 text-cobalt-600 px-8 py-4 rounded-xl text-lg hover:bg-cobalt-600 hover:text-white transition-colors focus-visible"
          >
            Get Notified of Completion
          </button>
        </div>
      </div>

      {/* Contribute Dialog */}
      {showContributeDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-md w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Contribute Research</h3>
              <button 
                onClick={() => setShowContributeDialog(false)}
                className="p-2 hover:bg-muted rounded-xl transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-border rounded-xl focus:ring-2 focus:ring-cobalt-600 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-border rounded-xl focus:ring-2 focus:ring-cobalt-600 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="area" className="block text-sm font-medium mb-2">
                  Area of Expertise
                </label>
                <input
                  type="text"
                  id="area"
                  className="w-full px-3 py-2 border border-border rounded-xl focus:ring-2 focus:ring-cobalt-600 focus:border-transparent outline-none"
                  placeholder="e.g., Energy, Economics, Data Science"
                />
              </div>
              
              <div>
                <label htmlFor="contribution" className="block text-sm font-medium mb-2">
                  What will you contribute?
                </label>
                <textarea
                  id="contribution"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-xl focus:ring-2 focus:ring-cobalt-600 focus:border-transparent outline-none resize-none"
                  placeholder="Describe your potential contribution..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-cobalt-600 text-white py-2 rounded-xl hover:bg-opacity-90 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowContributeDialog(false)}
                  className="flex-1 border border-border py-2 rounded-xl hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notify Dialog */}
      {showNotifyDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-md w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Get Notified</h3>
              <button 
                onClick={() => setShowNotifyDialog(false)}
                className="p-2 hover:bg-muted rounded-xl transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="notify-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="notify-email"
                  className="w-full px-3 py-2 border border-border rounded-xl focus:ring-2 focus:ring-cobalt-600 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">
                  Sector Interests (optional)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Energy", "Healthcare", "Technology", "Financials", "Agriculture", "Manufacturing"].map((sector) => (
                    <label key={sector} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-cobalt-600 rounded focus:ring-2 focus:ring-cobalt-600"
                      />
                      <span className="text-sm">{sector}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-cobalt-600 text-white py-2 rounded-xl hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={() => setShowNotifyDialog(false)}
                  className="flex-1 border border-border py-2 rounded-xl hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}