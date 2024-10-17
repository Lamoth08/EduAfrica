// src/components/CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

import mathAlgebre from '../Assets/mathAlgebre.png';
import elec from '../Assets/elec.jpeg';
import Chimie from '../Assets/chimie.jpeg';
import revFrance from '../Assets/revFrance.jpeg';
import programmationC from '../Assets/programmationC.jpeg';
import statistiques from '../Assets/statistiques.jpeg';
import biologie from '../Assets/biologie.jpeg';
import java from '../Assets/java.jpeg';
import deepLearning from '../Assets/deepLearning.png';
import mecaquantique from '../Assets/mecaquantique.jpeg';
import jsImage from '../Assets/js.png';
import reactImage from '../Assets/react.png';

// Les informations en détails pour chaque cours 
const courseData = {
    1: {
      title: "Mathématiques - Algèbre",
      details: "Ce cours aborde les concepts d'algèbre de base, y compris les équations linéaires, les fonctions et les inégalités.",
      instructor: "Prof. Jean Dupont",
      duration: "20 heures",
      prerequisites: "Connaissances de base en mathématiques.",
      learningObjectives: [
        "Comprendre les équations et les inégalités.",
        "Résoudre des problèmes algébriques.",
        "Appliquer les concepts d'algèbre dans des situations pratiques."
      ],
      evaluation: "Examens, devoirs et projets.",
      image: mathAlgebre
    },
    2: {
      title: "Physique - Électricité de base",
      details: "Dans ce cours, vous apprendrez les principes fondamentaux de l'électricité : courant, tension, et résistance.",
      instructor: "Dr. Marie Curie",
      duration: "15 heures",
      prerequisites: "Aucun",
      learningObjectives: [
        "Comprendre les concepts de courant et de tension.",
        "Utiliser des outils de mesure électrique.",
        "Réaliser des expériences simples."
      ],
      evaluation: "Examens pratiques et théoriques.",
      image: elec
    },
    3: {
      title: "Chimie - Réactions chimiques",
      details: "Ce cours couvre les bases des réactions chimiques, des équations et des équilibres.",
      instructor: "Dr. Antoine Lavoisier",
      duration: "18 heures",
      prerequisites: "Connaissances de base en chimie.",
      learningObjectives: [
        "Équilibrer des équations chimiques.",
        "Comprendre les types de réactions chimiques.",
        "Réaliser des expériences de laboratoire."
      ],
      evaluation: "Rapports de laboratoire et examens.",
      image: Chimie
    },
    4: {
      title: "Histoire - Révolution française",
      details: "Analyse des causes et des conséquences de la Révolution française.",
      instructor: "Mme. Sophie Lefebvre",
      duration: "12 heures",
      prerequisites: "Aucun",
      learningObjectives: [
        "Comprendre les causes sociales et politiques de la Révolution.",
        "Analyser les événements clés de la Révolution française.",
        "Évaluer l'impact de la Révolution sur la France et l'Europe."
      ],
      evaluation: "Essais et participation en classe.",
      image: revFrance
    },
    5: {
      title: "Programmation en C",
      details: "Apprenez les concepts de programmation en langage C.",
      instructor: "Prof. John McCarthy",
      duration: "25 heures",
      prerequisites: "Aucune connaissance préalable en programmation.",
      learningObjectives: [
        "Comprendre la syntaxe de base du langage C.",
        "Développer des programmes simples en C.",
        "Appliquer les concepts de programmation à des problèmes pratiques."
      ],
      evaluation: "Devoirs et projets pratiques.",
      image: programmationC
    },
    6: {
      title: "React Js",
      details: "Devenez un pro du Web avec ReactJs.",
      instructor: "Dr. Jane Smith",
      duration: "30 heures",
      prerequisites: "Connaissances de base en HTML, CSS et JavaScript.",
      learningObjectives: [
        "Construire des applications Web interactives avec React.",
        "Comprendre le cycle de vie des composants React.",
        "Gérer l'état et les props dans les composants."
      ],
      evaluation: "Projets finaux et tests en classe.",
      image: reactImage
    },
    7: {
      title: "Statistiques - Analyse de données",
      details: "Introduction aux concepts de probabilité et analyse statistique.",
      instructor: "Prof. Sarah Bernard",
      duration: "30 heures",
      prerequisites: "Aucun",
      learningObjectives: [
        "Comprendre les bases de la statistique descriptive.",
        "Appliquer des tests statistiques simples.",
        "Interpréter des données à l'aide de graphiques."
      ],
      evaluation: "Examen final et devoirs.",
      image: statistiques
    },
    8: {
      title: "Biologie cellulaire",
      details: "Comprendre la structure et la fonction des cellules.",
      instructor: "Dr. James Watson",
      duration: "20 heures",
      prerequisites: "Aucun",
      learningObjectives: [
        "Décrire les différentes parties d'une cellule.",
        "Comprendre le fonctionnement des organites.",
        "Appliquer les concepts de biologie cellulaire à des cas pratiques."
      ],
      evaluation: "Examens et projets de recherche.",
      image: biologie
    },
    9: {
      title: "Programmation en Java",
      details: "Apprendre la programmation orientée objet avec Java.",
      instructor: "Prof. Alan Turing",
      duration: "35 heures",
      prerequisites: "Connaissances de base en programmation.",
      learningObjectives: [
        "Comprendre les concepts de la programmation orientée objet.",
        "Développer des applications simples en Java.",
        "Utiliser des bibliothèques Java pour des tâches pratiques."
      ],
      evaluation: "Projets de programmation et examens.",
      image: java
    },
    10: {
      title: "IA - Apprentissage profond",
      details: "Approfondissez vos connaissances en IA et en deep learning.",
      instructor: "Prof. Yann LeCun",
      duration: "50 heures",
      prerequisites: "Connaissances en programmation et en mathématiques.",
      learningObjectives: [
        "Comprendre les principes de base de l'apprentissage automatique.",
        "Appliquer des réseaux neuronaux à des problèmes pratiques.",
        "Utiliser des bibliothèques d'apprentissage profond."
      ],
      evaluation: "Projets pratiques et examens.",
      image: deepLearning
    },
    11: {
      title: "Mécanique quantique",
      details: "Étudiez les concepts avancés de la physique quantique.",
      instructor: "Prof. Richard Feynman",
      duration: "60 heures",
      prerequisites: "Connaissances de base en physique et mathématiques.",
      learningObjectives: [
        "Comprendre les principes fondamentaux de la mécanique quantique.",
        "Appliquer la mécanique quantique à des systèmes physiques.",
        "Interpréter les résultats d'expériences quantiques."
      ],
      evaluation: "Examens et recherches individuelles.",
      image: mecaquantique
    },
    12: {
      title: "JavaScript",
      details: "Devenez expert en JavaScript !",
      instructor: "Prof. John Doe",
      duration: "40 heures",
      prerequisites: "Connaissances de base en HTML et CSS.",
      learningObjectives: [
        "Comprendre les concepts avancés de JavaScript.",
        "Manipuler le DOM et gérer les événements.",
        "Utiliser des frameworks JavaScript modernes."
      ],
      evaluation: "Projets, devoirs et examens.",
      image: jsImage
    }
  };
  

const CourseDetails = () => {
  const { id } = useParams(); 
  const course = courseData[id]; 

  return (
    <div className="course-details-page">
      <div className="course-image-container">
        <img src={course.image} alt={`${course.title} illustration`} className="course-image" />
        <h1 className="course-title-overlay">{course.title}</h1>
      </div>

      <div className="course-info">
        <p><strong>Description :</strong> {course.details}</p>
        <p><strong>Instructeur :</strong> {course.instructor}</p>
        <p><strong>Durée :</strong> {course.duration}</p>
        <p><strong>Prérequis :</strong> {course.prerequisites}</p>
        <p><strong>Objectifs d'apprentissage :</strong></p>
        <ul>
          {course.learningObjectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
        <p><strong>Modalités d'évaluation :</strong> {course.evaluation}</p>
        <button onClick={() => window.history.back()}>Retour</button> {/**Button de retour vers la liste des cours */}
      </div>
    </div>
  );
};

export default CourseDetails;
