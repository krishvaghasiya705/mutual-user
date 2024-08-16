import React from 'react';
import './groupPhoto.scss';

import groupPhoto from '../../../assets/image/groupPhoto.jpeg'

export default function GroupPhoto() {
  return (
    <div>
      <div className="group-image">
        <img src={groupPhoto} alt="groupPhoto" />
      </div>
      <div className="uberuns">
        <h2>Über uns</h2>
        <p><span>Wir sind MUTUALZ</span> <br />
        Unsere Vision ist es, das Aussterben der Innenstädte zu verhindern und sie in eine digitale Zukunft zu führen. Was uns verbindet, ist nicht nur eine Freundschaft, sondern auch der gemeinsame Wunsch, innovative Lösungen zu schaffen. Wir möchten Menschen miteinander vernetzen, lokale Unternehmen unterstützen und einzigartige Erlebnisse in den urbanen Zentren ermöglichen. Gemeinsam gestalten wir eine lebendige und nachhaltige Zukunft für unsere Innenstädte, basierend auf einer starken Verbundenheit und einer gemeinsamen Vision.</p>
      </div>
    </div>
  )
}
