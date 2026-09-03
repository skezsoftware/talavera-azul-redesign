import { useState } from 'react'
import FormField from './FormField'
import Button from './Button'

const eventTypes = [
  'Birthday or celebration',
  'Family brunch',
  'Large group dining',
  'Catering / takeout',
  'Other',
]

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <p>
          <strong>Thank you!</strong> We have received your inquiry and will get
          back to you within one business day. ¡Gracias!
        </p>
      </div>
    )
  }

  return (
    <form
      className="inquiry-form"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <FormField label="Name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField label="Phone" name="phone" type="tel" />
      <FormField
        label="Event type"
        name="event_type"
        as="select"
        required
        options={eventTypes}
      />
      <FormField label="Approximate guest count" name="guests" type="number" />
      <FormField label="Preferred date" name="date" type="date" />
      <FormField
        label="Tell us about your event"
        name="details"
        as="textarea"
        rows={4}
      />
      <Button type="submit" variant="primary">
        Send Inquiry
      </Button>
    </form>
  )
}
