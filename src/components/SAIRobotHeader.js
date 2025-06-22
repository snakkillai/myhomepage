import React from 'react';

const SAIRobotHeader = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '260px',
      height: '240px',
      background: 'radial-gradient(ellipse at 60% 40%, rgba(0, 150, 255, 0.15), transparent 80%)',
      borderRadius: '15px',
      border: '2.24px solid',
      borderImage: 'linear-gradient(45deg, #0080ff, #004080, #000040, #000000, #000040) 1',
      overflow: 'hidden',
      transformStyle: 'preserve-3d',
      boxShadow: `
        0 0 30px rgba(0, 128, 255, 0.5),
        inset 0 0 20px rgba(0, 0, 0, 0.3)
      `,
    },
    circuitBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.4,
    },
    circuitPath: {
      position: 'absolute',
      background: 'linear-gradient(90deg, transparent, #00ccff, transparent)',
      height: '2px',
      animation: 'circuitFlow 3s linear infinite',
    },
    circuitPath1: {
      top: '15%',
      left: '10%',
      width: '180px',
      animationDelay: '0s',
    },
    circuitPath2: {
      top: '35%',
      right: '15%',
      width: '130px',
      transform: 'rotate(45deg)',
      animationDelay: '1s',
    },
    circuitPath3: {
      bottom: '25%',
      left: '20%',
      width: '160px',
      transform: 'rotate(-30deg)',
      animationDelay: '2s',
    },
    circuitNode: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      background: '#00ffcc',
      borderRadius: '50%',
      boxShadow: '0 0 15px #00ffcc',
      animation: 'pulse 2s ease-in-out infinite',
    },
    hexBokeh: {
      position: 'absolute',
      width: '35px',
      height: '35px',
      background: 'linear-gradient(45deg, rgba(0, 200, 255, 0.3), rgba(0, 255, 200, 0.2))',
      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
      animation: 'hexFloat 4s ease-in-out infinite',
    },
    hexBokeh1: {
      top: '12%',
      left: '18%',
      animationDelay: '0s',
    },
    hexBokeh2: {
      top: '22%',
      right: '28%',
      animationDelay: '1.5s',
      transform: 'scale(0.7)',
    },
    hexBokeh3: {
      bottom: '32%',
      left: '22%',
      animationDelay: '3s',
      transform: 'scale(1.1)',
    },
    hexBokeh4: {
      bottom: '18%',
      right: '23%',
      animationDelay: '2s',
      transform: 'scale(0.8)',
    },
    robotFigure: {
      position: 'absolute',
      top: 'calc(50% - 20px)',
      right: 'calc(50% - 60px)',
      transform: 'translateX(50%) translateY(-50%) scale(0.45)',
      width: '280px',
      height: '350px',
      transformStyle: 'preserve-3d',
      animation: 'robotFloat 4s ease-in-out infinite',
    },
    robotHead: {
      width: '140px',
      height: '140px',
      background: 'linear-gradient(145deg, #2a3a5a, #1a2540)',
      borderRadius: '25px',
      position: 'relative',
      margin: '0 auto 20px auto',
      border: '2.4px solid #00aaff',
      boxShadow: `
        0 0 30px rgba(0, 170, 255, 0.6),
        inset 0 5px 15px rgba(255, 255, 255, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.3)
      `,
      transformStyle: 'preserve-3d',
      animation: 'headMovement 12s ease-in-out infinite',
      transformOrigin: 'center bottom',
    },
    robotFacePanel: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      width: '96px',
      height: '96px',
      background: 'rgba(0, 50, 100, 0.3)',
      borderRadius: '15px',
      border: '0.8px solid #00ccff',
      transform: 'translateZ(5px)',
      boxShadow: 'inset 0 2px 10px rgba(0, 200, 255, 0.3)',
    },
    robotEye: {
      position: 'absolute',
      width: '35px',
      height: '35px',
      top: '25px',
      background: 'radial-gradient(circle, #00ffcc, #0088ff)',
      borderRadius: '50%',
      border: '1.6px solid #ffffff',
      boxShadow: `
        0 0 20px #00ffcc,
        inset 0 2px 8px rgba(255, 255, 255, 0.3)
      `,
      animation: 'eyeGlow 3s ease-in-out infinite',
      transform: 'translateZ(8px)',
    },
    robotEyeLeft: {
      left: '15px',
    },
    robotEyeRight: {
      right: '15px',
    },
    robotMouth: {
      position: 'absolute',
      bottom: '15px',
      left: '50%',
      transform: 'translateX(-50%) translateZ(5px)',
      width: '40px',
      height: '8px',
      background: 'linear-gradient(90deg, #00aaff, #00ffcc)',
      borderRadius: '4px',
      opacity: 0.8,
      boxShadow: '0 2px 8px rgba(0, 170, 255, 0.5)',
    },
    robotNeck: {
      width: '60px',
      height: '30px',
      background: 'linear-gradient(145deg, #2a3a5a, #1a2540)',
      borderRadius: '15px',
      margin: '0 auto',
      border: '1.6px solid #00aaff',
      boxShadow: `
        0 5px 15px rgba(0, 0, 0, 0.3),
        inset 0 2px 8px rgba(255, 255, 255, 0.1)
      `,
      transform: 'translateZ(-5px)',
    },
    robotTorso: {
      width: '120px',
      height: '100px',
      background: 'linear-gradient(145deg, #2a3a5a, #1a2540)',
      borderRadius: '20px',
      margin: '10px auto',
      border: '2.4px solid #00aaff',
      position: 'relative',
      boxShadow: `
        0 0 25px rgba(0, 170, 255, 0.4),
        0 10px 25px rgba(0, 0, 0, 0.4),
        inset 0 5px 15px rgba(255, 255, 255, 0.1)
      `,
      transformStyle: 'preserve-3d',
    },
    chestPanel: {
      position: 'absolute',
      top: '15px',
      left: '50%',
      transform: 'translateX(-50%) translateZ(8px)',
      width: '60px',
      height: '40px',
      background: 'rgba(0, 255, 200, 0.1)',
      border: '0.8px solid #00ffcc',
      borderRadius: '8px',
      boxShadow: `
        inset 0 2px 8px rgba(0, 255, 200, 0.3),
        0 0 15px rgba(0, 255, 200, 0.2)
      `,
      animation: 'chestGlow 2s ease-in-out infinite',
    },
    robotArm: {
      position: 'absolute',
      top: '15px',
      left: '-40px',
      width: '35px',
      height: '120px',
      background: 'linear-gradient(145deg, #2a3a5a, #1a2540)',
      borderRadius: '18px',
      border: '1.6px solid #00aaff',
      transform: 'rotate(-15deg) translateZ(-10px)',
      transformOrigin: 'top center',
      boxShadow: `
        0 8px 20px rgba(0, 0, 0, 0.3),
        inset 0 3px 10px rgba(255, 255, 255, 0.1)
      `,
      animation: 'armFloat 3s ease-in-out infinite',
    },
    robotForearm: {
      position: 'absolute',
      bottom: '-60px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg) translateZ(5px)',
      width: '30px',
      height: '80px',
      background: 'linear-gradient(145deg, #2a3a5a, #1a2540)',
      borderRadius: '15px',
      border: '1.6px solid #00aaff',
      boxShadow: `
        0 5px 15px rgba(0, 0, 0, 0.3),
        inset 0 2px 8px rgba(255, 255, 255, 0.1)
      `,
    },
    robotHand: {
      position: 'absolute',
      bottom: '-30px',
      left: '50%',
      transform: 'translateX(-50%) translateZ(8px)',
      width: '40px',
      height: '40px',
      background: 'linear-gradient(145deg, #2a3a5a, #1a2540)',
      borderRadius: '50%',
      border: '1.6px solid #00aaff',
      boxShadow: `
        0 0 15px rgba(0, 170, 255, 0.5),
        0 5px 15px rgba(0, 0, 0, 0.3),
        inset 0 3px 10px rgba(255, 255, 255, 0.2)
      `,
      animation: 'handGlow 2.5s ease-in-out infinite',
    },
    // 🔥 CHANGE MADE HERE: Moved text 10px to the right
    saiLogo: {
      position: 'absolute',
      top: '50%',
      left: '-110px', // CHANGED: Was -120px, now -110px (moved 10px to the right)
      transform: 'translateY(-50%) scale(0.45)',
      textAlign: 'left',
      transformStyle: 'preserve-3d',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: 'auto',
    },
    saiText: {
      fontSize: '280px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 0 40px rgba(139, 92, 246, 0.6)',
      animation: 'logoGlow 3s ease-in-out infinite',
      fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
      letterSpacing: '4px',
      position: 'relative',
      transform: 'translateZ(20px)',
      lineHeight: '0.9',
      margin: 0,
      padding: 0,
    },
    saiOutline: {
      position: 'absolute',
      top: 0,
      left: 0,
      fontSize: '280px',
      fontWeight: 'bold',
      color: 'transparent',
      WebkitTextStroke: '1.6px #6366f1',
      textStroke: '1.6px #6366f1',
      opacity: 0.4,
      letterSpacing: '4px',
      transform: 'translateZ(-5px)',
      lineHeight: '0.9',
      margin: 0,
      padding: 0,
    },
    saiSubtitle: {
      color: '#e879f9',
      fontSize: '28px',
      marginTop: '10px',
      marginLeft: '0',
      opacity: 0.9,
      letterSpacing: '2px',
      fontWeight: 500,
      textTransform: 'uppercase',
      transform: 'translateZ(10px)',
      fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
      textAlign: 'left',
      width: 'auto',
      whiteSpace: 'nowrap',
    },
    creatorName: {
      color: '#06b6d4',
      fontSize: '36px',
      marginTop: '20px',
      marginLeft: '0',
      opacity: 0.85,
      letterSpacing: '1px',
      fontWeight: 600,
      transform: 'translateZ(15px)',
      textShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
      animation: 'nameGlow 4s ease-in-out infinite',
      fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
      textAlign: 'left',
      width: 'auto',
      whiteSpace: 'nowrap',
    },
    energyBeam: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '75px',
      height: '4px',
      background: 'linear-gradient(90deg, #00aaff, #00ffcc, transparent)',
      transform: 'translateX(-50%) translateY(-50%) translateZ(5px) scale(0.5)',
      animation: 'energyFlow 2s linear infinite',
      borderRadius: '2px',
      boxShadow: '0 0 10px rgba(0, 255, 200, 0.6)',
    },
    energyParticles: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '8px',
      height: '8px',
      background: '#00ffcc',
      borderRadius: '50%',
      boxShadow: '0 0 10px #00ffcc',
      animation: 'particleMove 1.5s linear infinite',
      transform: 'translateX(-50%) translateZ(10px) scale(0.5)',
    },
  };

  return (
    <>
      <style>{`
        @keyframes headMovement {
          0%, 16.67%, 83.33%, 100% { 
            transform: rotateY(0deg) translateZ(0px);
          }
          33.33%, 50% { 
            transform: rotateY(-90deg) translateZ(10px);
          }
          66.67% { 
            transform: rotateY(90deg) translateZ(10px);
          }
        }

        @keyframes robotFloat {
          0%, 100% { 
            transform: translateX(50%) translateY(-50%) scale(0.45) translateZ(0px);
          }
          50% { 
            transform: translateX(50%) translateY(-55%) scale(0.45) translateZ(15px);
          }
        }

        @keyframes armFloat {
          0%, 100% { 
            transform: rotate(-15deg) translateZ(-10px);
          }
          50% { 
            transform: rotate(-10deg) translateZ(-5px);
          }
        }

        @keyframes chestGlow {
          0%, 100% { 
            box-shadow: 
              inset 0 2px 8px rgba(0, 255, 200, 0.3),
              0 0 15px rgba(0, 255, 200, 0.2);
          }
          50% { 
            box-shadow: 
              inset 0 2px 8px rgba(0, 255, 200, 0.6),
              0 0 25px rgba(0, 255, 200, 0.5);
          }
        }

        @keyframes handGlow {
          0%, 100% { 
            box-shadow: 
              0 0 15px rgba(0, 170, 255, 0.5),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 3px 10px rgba(255, 255, 255, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 25px rgba(0, 170, 255, 0.8),
              0 5px 15px rgba(0, 0, 0, 0.3),
              inset 0 3px 10px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes circuitFlow {
          0% { background: linear-gradient(90deg, transparent, transparent, transparent); }
          50% { background: linear-gradient(90deg, transparent, #00ccff, transparent); }
          100% { background: linear-gradient(90deg, transparent, transparent, transparent); }
        }

        @keyframes hexFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg) translateZ(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) rotate(180deg) translateZ(10px); opacity: 0.7; }
        }

        @keyframes eyeGlow {
          0%, 100% { 
            box-shadow: 
              0 0 20px #00ffcc,
              inset 0 2px 8px rgba(255, 255, 255, 0.3);
          }
          50% { 
            box-shadow: 
              0 0 40px #00ffcc, 0 0 60px #00ffcc,
              inset 0 2px 8px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes nameGlow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
            opacity: 0.85;
          }
          50% { 
            text-shadow: 0 0 30px rgba(6, 182, 212, 0.8);
            opacity: 1;
          }
        }

        @keyframes logoGlow {
          0%, 100% { 
            text-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
          }
          50% { 
            text-shadow: 
              0 0 60px rgba(139, 92, 246, 0.9), 
              0 0 80px rgba(168, 85, 247, 0.6);
          }
        }

        @keyframes energyFlow {
          0% { transform: translateY(-50%) translateZ(5px) scale(0.5) scaleX(0); opacity: 0; }
          50% { transform: translateY(-50%) translateZ(5px) scale(0.5) scaleX(1); opacity: 1; }
          100% { transform: translateY(-50%) translateZ(5px) scale(0.5) scaleX(0); opacity: 0; }
        }

        @keyframes particleMove {
          0% { transform: translateX(0) translateY(-50%) translateZ(10px) scale(0.5); opacity: 1; }
          100% { transform: translateX(55px) translateY(-50%) translateZ(20px) scale(0.5); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) translateZ(0px); opacity: 0.8; }
          50% { transform: scale(1.5) translateZ(5px); opacity: 1; }
        }

        @media (max-width: 768px) {
          .sai-robot-container {
            width: 95vw !important;
            height: 50vh !important;
            max-width: 260px !important;
            max-height: 240px !important;
          }
          
          .sai-robot-container .sai-logo {
            left: -120px !important; /* CHANGED: Mobile version also moved 10px right (was -130px) */
            transform: translateY(-50%) scale(0.35) !important;
          }
        }
      `}</style>
      
      <div className="sai-robot-container" style={styles.container}>
        {/* Circuit background */}
        <div style={styles.circuitBackground}>
          <div style={{...styles.circuitPath, ...styles.circuitPath1}}></div>
          <div style={{...styles.circuitPath, ...styles.circuitPath2}}></div>
          <div style={{...styles.circuitPath, ...styles.circuitPath3}}></div>
          <div style={{...styles.circuitNode, top: '15%', left: '12%'}}></div>
          <div style={{...styles.circuitNode, top: '35%', right: '17%'}}></div>
          <div style={{...styles.circuitNode, bottom: '25%', left: '22%'}}></div>
        </div>
        
        {/* Hexagonal bokeh effects */}
        <div style={{...styles.hexBokeh, ...styles.hexBokeh1}}></div>
        <div style={{...styles.hexBokeh, ...styles.hexBokeh2}}></div>
        <div style={{...styles.hexBokeh, ...styles.hexBokeh3}}></div>
        <div style={{...styles.hexBokeh, ...styles.hexBokeh4}}></div>
        
        {/* sAI Logo */}
        <div className="sai-logo" style={styles.saiLogo}>
          <div style={styles.saiOutline}>sAI</div>
          <div style={styles.saiText}>sAI</div>
          <div style={styles.saiSubtitle}>Augmented Intelligence</div>
          <div style={styles.creatorName}>Suresh Nakkilla</div>
        </div>
        
        {/* Energy connection */}
        <div style={styles.energyBeam}></div>
        <div style={styles.energyParticles}></div>
        
        {/* Advanced robot figure */}
        <div style={styles.robotFigure}>
          <div style={styles.robotHead}>
            <div style={styles.robotFacePanel}>
              <div style={{...styles.robotEye, ...styles.robotEyeLeft}}>
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '6px',
                  width: '8px',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '50%',
                  transform: 'translateZ(2px)',
                }}></div>
              </div>
              <div style={{...styles.robotEye, ...styles.robotEyeRight}}>
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '6px',
                  width: '8px',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '50%',
                  transform: 'translateZ(2px)',
                }}></div>
              </div>
              <div style={styles.robotMouth}></div>
            </div>
          </div>
          <div style={styles.robotNeck}></div>
          <div style={styles.robotTorso}>
            <div style={styles.chestPanel}></div>
            <div style={styles.robotArm}>
              <div style={styles.robotForearm}>
                <div style={styles.robotHand}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SAIRobotHeader;