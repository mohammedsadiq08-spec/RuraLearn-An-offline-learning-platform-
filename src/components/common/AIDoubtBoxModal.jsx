import React, { useState } from 'react';
import { apiClient } from '../../services/apiClient';
import { useProgress } from '../../hooks/useProgress';
import { MessageSquare, Send, Sparkles, X, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AIDoubtBoxModal({ isOpen, onClose }) {
  const { profile } = useProgress();
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await apiClient.post('/api/doubt/ask', {
        question: question.trim(),
        subject: profile.currentSubject || 'General Science & Mathematics',
        currentClass: profile.currentClass || 'Class 10',
      });

      if (res.data?.success) {
        setResponse(res.data);
      } else {
        setError(res.error || 'Could not process question.');
      }
    } catch (err) {
      setError('Failed to connect to Doubt Box service.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
          <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">AI Doubt Box</h3>
            <p className="text-xs text-slate-500">
              Ask any concept question • Step-by-step rural-friendly explanations
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {response && (
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-800 space-y-3 animate-fade-in">
              <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Explanation & Guidance</span>
              </div>
              <p className="whitespace-pre-wrap leading-relaxed font-medium">
                {response.answer}
              </p>

              {response.suggestions && response.suggestions.length > 0 && (
                <div className="pt-2 border-t border-emerald-200/60 space-y-1">
                  <span className="font-bold text-[11px] text-emerald-900 uppercase">Recommended Next Steps:</span>
                  <ul className="list-disc list-inside text-emerald-800 text-[11px] space-y-0.5">
                    {response.suggestions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {!response && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-900 block">Example Questions to Ask:</span>
              <div className="space-y-1 text-[11px] text-slate-500">
                <p>• "How does Euclid division lemma help find HCF?"</p>
                <p>• "Why does concave mirror form real inverted images?"</p>
                <p>• "What is difference between Stack and Queue in Data Structures?"</p>
              </div>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleAsk} className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question or doubt here..."
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-emerald-700 focus:outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 shrink-0"
          >
            {loading ? (
              <span>Thinking...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Ask AI</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
