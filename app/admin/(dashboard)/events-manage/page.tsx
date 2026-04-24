'use client';
import CrudManager from '@/components/CrudManager';

export default function EventsAdmin() {
  return (
    <CrudManager
      title="Events & Workshops"
      endpoint="/api/cms/events"
      displayFields={['title', 'date_text', 'location', 'is_active']}
      fields={[
        { key: 'title', label: 'Event title', required: true },
        { key: 'date_text', label: 'Date (free text)', placeholder: 'e.g. 12 August 2025' },
        { key: 'location', label: 'Location' },
        { key: 'sort_order', label: 'Sort order', type: 'number' },
        { key: 'is_active', label: 'Active', type: 'checkbox', placeholder: 'Visible on public site' },
      ]}
    />
  );
}
