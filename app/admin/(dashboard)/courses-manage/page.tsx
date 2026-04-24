'use client';
import CrudManager from '@/components/CrudManager';

export default function CoursesAdmin() {
  return (
    <CrudManager
      title="Courses"
      endpoint="/api/cms/courses"
      displayFields={['name', 'category', 'tag', 'sort_order', 'is_featured', 'is_active']}
      fields={[
        { key: 'name', label: 'Course name', required: true },
        { key: 'category', label: 'Category', placeholder: 'e.g. Design & CAD' },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'tag', label: 'Tag (optional)', placeholder: 'e.g. Best-seller, Job-ready' },
        { key: 'sort_order', label: 'Sort order (lower = earlier)', type: 'number' },
        { key: 'is_featured', label: 'Featured', type: 'checkbox', placeholder: 'Show on home page' },
        { key: 'is_active', label: 'Active', type: 'checkbox', placeholder: 'Visible on public site' },
      ]}
    />
  );
}
