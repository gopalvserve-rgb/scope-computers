import ContentEditor from '@/components/ContentEditor';
import { getAllContent } from '@/lib/cms';

export const dynamic = 'force-dynamic';

export default async function ContentAdminPage() {
  const content = await getAllContent();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Site Content</h1>
        <p className="text-sm text-slate-600">Edit the main text that appears across the public site. Changes save instantly.</p>
      </div>
      <ContentEditor initial={content} />
    </div>
  );
}
