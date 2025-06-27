import { AlertCircle } from 'lucide-react';

export default function ErrorBox({ error }) {
  return (
    <div className="mb-8">
      <div className="backdrop-blur-sm bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    </div>
  );
}
