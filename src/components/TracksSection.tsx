import React from 'react';
import { tracksData } from '../data/tracks';
import { getPosterBySlug } from '../data/posters';
import { PosterDisplay } from './PosterDisplay';
import { SectionHeader } from './SectionHeader';
import { ScrollReveal } from './ScrollReveal';
import { SpecularButton } from './SpecularButton';

export const TracksSection: React.FC = () => {
  return (
    <section id="tracks" className="tracks-section section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <SectionHeader num="04 / TRACKS & COMPETITIONS" title="Tracks & Competitions" />
        
        {/* Alternating Tracks Showcase List */}
        <div className="tracks-showcase-list">
          {tracksData.map((track, index) => {
            const isReversed = index % 2 === 1;
            const poster = getPosterBySlug(track.posterSlug);

            return (
              <ScrollReveal 
                key={track.id} 
                variant="fade-up" 
                className={`track-showcase-row ${isReversed ? 'reversed' : ''}`}
              >
                {/* Visual Block with Poster */}
                <div className="track-showcase-image-wrap">
                  <PosterDisplay 
                    poster={poster} 
                    className="track-card-poster"
                    loading="lazy" 
                  />
                </div>

                {/* Information Column */}
                <div className="track-showcase-info">
                  <div className="track-kicker-wrap">
                    <span className="track-kicker">{track.kicker}</span>
                  </div>

                  <h3 className="track-showcase-title">
                    {track.title}
                  </h3>

                  {track.isCommon && track.commonLabel && (
                    <div className="track-common-wrap">
                      <span className="track-common-badge">
                        {track.commonLabel}
                      </span>
                    </div>
                  )}

                  <p className="track-showcase-desc">
                    {track.description}
                  </p>

                  {track.registrationEnabled && (
                    <div className="track-action-wrap">
                      <SpecularButton 
                        href={track.registrationLink} 
                        size="md"
                      >
                        <span>REGISTER</span>
                        <span aria-hidden="true">→</span>
                      </SpecularButton>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
