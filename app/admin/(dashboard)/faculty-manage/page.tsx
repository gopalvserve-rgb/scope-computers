'use client';
import CrudManager from '@/components/CrudManager';

export default function FacultyAdmin() {
  return (
    <CrudManager
      title="Faculty"
      endpoint="/api/cms/faculty"
      displayFields={['name', 'role', 'sort_order', 'is_active']}
      fields={[
        { key: 'name', label: 'Name', required: true },
        { key: 'role', label: 'Role / Title', placeholder: 'e.g. Director, Senior Trainer' },
        { key: 'specialization', label: 'Specialization (one line)', type: 'textarea', rows: 2 },
        { key: 'bio', label: 'Full bio', type: 'textarea', rows: 5 },
        { key: 'photo_url', label: 'Photo URL (optional)' },
        { key: 'sort_order', label: 'Sort order', type: 'number' },
        { key: 'is_active', label: 'Active', type: 'checkbox', placeholder: 'Visible on public site' },
      ]}
    />
  );
}
