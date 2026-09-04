import React, { useState, useEffect } from 'react';
import { storageService } from '../../services/storageService';
import { Edit3, Plus, Trash2, Tag, Check, Bookmark, Database } from 'lucide-react';

export default function StudyNotes({ lessonId, chapterTitle }) {
  const [notes, setNotes] = useState(() => storageService.getLessonNotes(lessonId));
  const [inputText, setInputText] = useState('');
  const [selectedTag, setSelectedTag] = useState('Note'); // 'Note' | 'Formula' | 'Exam Tip' | 'Doubt'
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    setNotes(storageService.getLessonNotes(lessonId));

    const handleNotesChange = () => {
      setNotes(storageService.getLessonNotes(lessonId));
    };
    window.addEventListener('ruralearn:notes-changed', handleNotesChange);
    return () => window.removeEventListener('ruralearn:notes-changed', handleNotesChange);
  }, [lessonId]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    storageService.saveNote(lessonId, inputText, selectedTag);
    setInputText('');
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handleDelete = (id) => {
    storageService.deleteNote(id);
  };

  const tagColors = {
    'Note': 'bg-slate-100 text-slate-700 border-slate-200',
    'Formula': 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'Exam Tip': 'bg-amber-50 text-amber-800 border-amber-200',
    'Doubt': 'bg-red-50 text-red-800 border-red-200',
  };

  return (
    <div className="my-10 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Edit3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">My Study Notes & Bookmarks</h3>
            <p className="text-xs text-slate-500">
              Personal reflections saved in real-time to your offline local database (RuraLearnDB)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
          <Database className="w-3.5 h-3.5 text-emerald-700" />
          <span>Local DB Active</span>
        </div>
      </div>

      {/* Note input form */}
      <form onSubmit={handleAddNote} className="space-y-3 mb-6">
        <div className="flex flex-wrap gap-2 mb-1">
          {['Note', 'Formula', 'Exam Tip', 'Doubt'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setSelectedTag(t)}
              className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all ${
                selectedTag === t
                  ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative">
          <textarea
            rows="3"
            placeholder={`Write a personal study note, formula trick, or question for ${chapterTitle}...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-3 text-sm border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-700 focus:outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-medium">
            {justSaved ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saved to IndexedDB
              </span>
            ) : (
              'Automatically stored in persistent device storage'
            )}
          </span>

          <button
            type="submit"
            disabled={!inputText.trim()}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs shadow-xs transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Save Note</span>
          </button>
        </div>
      </form>

      {/* Saved notes list */}
      {notes.length > 0 ? (
        <div className="space-y-3 pt-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Saved Notes for this Chapter ({notes.length})
          </div>
          {notes.map((n) => (
            <div
              key={n.id}
              className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 flex items-start justify-between gap-3 group"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${tagColors[n.tag] || tagColors['Note']}`}>
                    {n.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {new Date(n.createdAt).toLocaleDateString()} {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed whitespace-pre-wrap">
                  {n.text}
                </p>
              </div>

              <button
                onClick={() => handleDelete(n.id)}
                className="text-slate-300 hover:text-red-600 p-1.5 rounded-lg transition-colors opacity-80 group-hover:opacity-100"
                title="Delete note"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-xs text-slate-400">
          No personal notes yet. Add your first note or formula above!
        </div>
      )}
    </div>
  );
}
