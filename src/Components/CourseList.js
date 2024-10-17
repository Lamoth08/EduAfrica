import React, {useState} from 'react';
import Course from './Course';
import './CourseList.css'; 

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

const courses = [
  { 
    id: 1, 
    title: "Mathématiques - Algèbre", 
    description: "Introduction aux équations, inégalités et fonctions algébriques.", 
    level: "Débutant", 
    image: mathAlgebre
  },
  { 
    id: 2, 
    title: "Physique - Électricité de base", 
    description: "Comprendre les concepts de tension, courant, et résistance.", 
    level: "Débutant", 
    image: elec
  },
  { 
    id: 3, 
    title: "Chimie - Réactions chimiques", 
    description: "Apprenez les bases des réactions chimiques, des équations et des équilibres.", 
    level: "Débutant", 
    image: Chimie
  },
  { 
    id: 4, 
    title: "Histoire - Révolution française", 
    description: "Analyse des causes et des conséquences de la Révolution française.", 
    level: "Débutant", 
    image: revFrance
  },
  { 
    id: 5, 
    title: "Programmation en C", 
    description: "Apprenez les concepts de programmation en langage C.", 
    level: "Intermédiaire", 
    image: programmationC
  },
  { 
    id: 6, 
    title: "React Js", 
    description: "Devenez un pro du Web avec ReactJs", 
    level: "Intermédiaire", 
    image: reactImage
  },
  { 
    id: 7, 
    title: "Statistiques - Analyse de données", 
    description: "Introduction aux concepts de probabilité et analyse statistique.", 
    level: "Intermédiaire", 
    image: statistiques
  },
  { 
    id: 8, 
    title: "Biologie cellulaire", 
    description: "Comprendre la structure et la fonction des cellules.", 
    level: "Intermédiaire", 
    image: biologie
  },
  { 
    id: 9, 
    title: "Programmation en Java", 
    description: "Apprendre la programmation orientée objet avec Java.", 
    level: "Intermédiaire", 
    image: java
  },
  { 
    id: 10, 
    title: "IA - Apprentissage profond", 
    description: "Approfondissez vos connaissances en IA et en deep learning.", 
    level: "Avancé", 
    image: deepLearning
  },
  { 
    id: 11, 
    title: "Mécanique quantique", 
    description: "Étudiez les concepts avancés de la physique quantique.", 
    level: "Avancé", 
    image: mecaquantique
  },
  { 
    id: 12, 
    title: "JavaScript", 
    description: "Devenez expert en JavaScript !", 
    level: "Avancé", 
    image: jsImage
  }
];


const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour filtrer les cours en fonction du terme de recherche
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="cours">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Rechercher un cours..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="course-list">
        {filteredCourses.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
