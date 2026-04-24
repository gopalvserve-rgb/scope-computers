'use client';
import CrudManager from '@/components/CrudManager';

export default function BlogAdmin() {
  return (
    <CrudManager
      title="Blog Posts / News"
      endpoint="/api/cms/blog"
      displayFields={['title', 'slug', 'is_published']}
      fields={[
        { key: 'title', label: 'Title', required: true },
        { key: 'slug', label: 'URL slug', placeholder: 'auto-generated from title if empty', required: false },
        { key: 'tagline', label: 'Short tagline / category' },
        { key: 'intro', label: 'Intro paragraph', type: 'textarea', rows: 3 },
        { key: 'body', label: 'Body (Markdown supported)', type: 'textarea', rows: 12 },
        { key: 'is_published', label: 'Published', type: 'checkbox', placeholder: 'Visible on public site' },
      ]}
    />
  );
}
