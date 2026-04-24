'use client';
import CrudManager from '@/components/CrudManager';

export default function TestimonialsAdmin() {
  return (
    <CrudManager
      title="Testimonials"
      endpoint="/api/cms/testimonials"
      displayFields={['name', 'course', 'label', 'is_active']}
      fields={[
        { key: 'name', label: 'Student name', required: true },
        { key: 'course', label: 'Course taken' },
        { key: 'label', label: 'One-word label', placeholder: 'e.g. Excellent, Outstanding' },
        { key: 'quote', label: 'Testimonial quote', type: 'textarea', rows: 5 },
        { key: 'sort_order', label: 'Sort order', type: 'number' },
        { key: 'is_active', label: 'Active', type: 'checkbox', placeholder: 'Visible on public site' },
      ]}
    />
  );
}
