import React, { useState, useRef } from 'react';
import styles from './Project.module.css';

export default function Project({ project }) {
  const [selectedMedia, setSelectedMedia] = useState(() => {
    if (project.videos?.length > 0) {
      return { type: 'video', src: project.videos[0] };
    } else if (project.images?.length > 0) {
      return { type: 'image', src: project.images[0] };
    }
    return null;
  });

  const [showModal, setShowModal] = useState(false);
  const iframeRef = useRef(null);

  const handlePreviewClick = () => {
    if (selectedMedia) setShowModal(true);
  };

  const handleThumbnailClick = (type, src) => {
    if (type === 'video') {
      const autoplaySrc = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;
      setSelectedMedia({ type, src: autoplaySrc });
    }
    else {
      setSelectedMedia({ type, src });
    }
  };

  return (
    <div
      className={`${styles.projectCard} ${project.fullWidth ? styles.fullWidth : styles.halfWidth}`}>
      {project.fullWidth ? (
        <>
          <div className={styles.leftColumn}>
            {selectedMedia && (
              <div className={styles.previewArea} onClick={handlePreviewClick}>
                {selectedMedia.type === 'image' ? (
                  <img src={selectedMedia.src} alt="Selected" />
                ) : (
                  <iframe
                    ref={iframeRef}
                    src={selectedMedia.src}
                    title="Selected Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            )}

            <div className={styles.imageGallery}>
              {project.videos?.map((url, i) => {
                const videoId = url.split('/embed/')[1]?.split('?')[0];
                return (
                  <div
                    key={`video-${i}`}
                    className={`${styles.thumbnail} ${
                      selectedMedia?.type === 'video' && selectedMedia.src.includes(videoId)
                        ? styles.thumbnailActive
                        : ''
                    }`}
                    onClick={() => handleThumbnailClick('video', url)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                      alt={`Video thumbnail ${i + 1}`}
                    />
                    <div className={styles.playIconOverlay}>▶</div>
                  </div>
                );
              })}

              {project.images?.map((src, i) => (
                <div
                  key={`img-${i}`}
                  className={`${styles.thumbnail} ${
                    selectedMedia?.type === 'image' && selectedMedia.src === src
                      ? styles.thumbnailActive
                      : ''
                  }`}
                  onClick={() => handleThumbnailClick('image', src)}
                >
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightColumn}>
            {project.coverImage && (
              <div className={styles.coverImageWrapper}>
                <img src={project.coverImage} alt={`${project.title} cover`} />
              </div>
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.tags && (
              <ul className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            )}

            {project.role && (
              <ul className={styles.roles}>
                {project.role.split(',').map((role, i) => (
                  <li key={i}>{role.trim()}</li>
                ))}
              </ul>
            )}

            {project.language && (
              <ul className={styles.language}>
                {project.language.split(',').map((language, i) => (
                  <li key={i}>{language.trim()}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={styles.leftColumn}>
            {selectedMedia && (
              <div className={styles.previewArea} onClick={handlePreviewClick}>
                {selectedMedia.type === 'image' ? (
                  <img src={selectedMedia.src} alt="Selected" />
                ) : (
                  <iframe
                    ref={iframeRef}
                    src={selectedMedia.src}
                    title="Selected Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            )}

            <div className={styles.imageGallery}>
              {project.videos?.map((url, i) => {
                const videoId = url.split('/embed/')[1]?.split('?')[0];
                return (
                  <div
                    key={`video-${i}`}
                    className={`${styles.thumbnail} ${
                      selectedMedia?.type === 'video' && selectedMedia.src.includes(videoId)
                        ? styles.thumbnailActive
                        : ''
                    }`}
                    onClick={() => handleThumbnailClick('video', url)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                      alt={`Video thumbnail ${i + 1}`}
                    />
                    <div className={styles.playIconOverlay}>▶</div>
                  </div>
                );
              })}

              {project.images?.map((src, i) => (
                <div
                  key={`img-${i}`}
                  className={`${styles.thumbnail} ${
                    selectedMedia?.type === 'image' && selectedMedia.src === src
                      ? styles.thumbnailActive
                      : ''
                  }`}
                  onClick={() => handleThumbnailClick('image', src)}
                >
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomRow}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.tags && (
              <ul className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            )}

            {project.role && (
              <ul className={styles.roles}>
                {project.role.split(',').map((role, i) => (
                  <li key={i}>{role.trim()}</li>
                ))}
              </ul>
            )}

            {project.language && (
              <ul className={styles.language}>
                {project.language.split(',').map((language, i) => (
                  <li key={i}>{language.trim()}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      {showModal && selectedMedia && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          {selectedMedia.type === 'image' ? (
            <img src={selectedMedia.src} alt="Full View" className={styles.modalImg} />
          ) : (
            <iframe
              src={selectedMedia.src}
              title="Fullscreen Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.modalImg}
            />
          )}
        </div>
      )}
    </div>
  );
}

