'use client'
import React from 'react';

function CalendlyButton() {
  const calendlyEmbedCode = `
  <!-- Calendly inline widget begin -->
  <div class="calendly-inline-widget bg-black" data-url="https://calendly.com/vidualize/30min" style=" min-width:320px;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
  <!-- Calendly inline widget end -->
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: calendlyEmbedCode }} />
  );
}

export default CalendlyButton;