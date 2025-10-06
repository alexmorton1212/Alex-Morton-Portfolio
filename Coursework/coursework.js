const courses = [
    {
        department: 'Math',
        number: 'MATH 521',
        name: 'Advanced Calculus I',
        university: 'UNC Chapel Hill',
        skills: ['Calculus']
    },
    {
        department: 'Computer Science',
        number: 'COMP 550',
        name: 'Algorithms and Analysis',
        university: 'UNC Chapel Hill',
        skills: ['Data Structures', 'Complexity Analysis']
    },
    {
        department: 'American Studies',
        number: 'AMST 220',
        name: 'Animal Studies',
        university: 'UNC Chapel Hill',
        skills: ['Logic', 'Communication']
    },
    {
        department: 'Business',
        number: 'MGT 6748',
        name: 'Applied Analytics Practicum',
        university: 'Georgia Tech',
        skills: ['AI', 'Machine Learning', 'TensorFlow', 'GPU', 'LLM', 'Python', 'PyTorch', 'Keras', 'Scikit-Learn']
    },
    {
        department: 'Computer Science',
        number: 'COMP 590',
        name: 'Beyond Object Oriented Programming',
        university: 'UNC Chapel Hill',
        skills: ['Go', 'Scala', 'Erlang', 'Elixir']
    },
    {
        department: 'Business',
        number: 'MGT 8803',
        name: 'Business Fundamentals for Analytics',
        university: 'Georgia Tech',
        skills: ['Agile', 'Finance']
    },
    {
        department: 'Math',
        number: 'MATH 232',
        name: 'Calculus II',
        university: 'UNC Chapel Hill',
        skills: ['Calculus']
    },
    {
        department: 'Math',
        number: 'MATH 233',
        name: 'Calculus III',
        university: 'UNC Chapel Hill',
        skills: ['Calculus']
    },
    {
        department: 'Computer Science',
        number: 'COMP 572',
        name: 'Computational Photography',
        university: 'UNC Chapel Hill',
        skills: ['MATLAB']
    },
    {
        department: 'Computer Science',
        number: 'COMP 411',
        name: 'Computer Organization',
        university: 'UNC Chapel Hill',
        skills: ['C', 'Assembly']
    },
    {
        department: 'Computer Science',
        number: 'COMP 435',
        name: 'Computer Security Concepts',
        university: 'UNC Chapel Hill',
        skills: ['C', 'Linux']
    },
    {
        department: 'Computer Science',
        number: 'CSE 6040',
        name: 'Computing for Data Analytics',
        university: 'Georgia Tech',
        skills: ['Python', 'Spark', 'SQL', 'Pandas', 'NumPy']
    },
    {
        department: 'English',
        number: 'CMPL 89',
        name: 'Curiosity and Birth of the Imagination',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'Business',
        number: 'MGT 8823',
        name: 'Data Analysis for Continuous Improvement',
        university: 'Georgia Tech',
        skills: ['Excel', 'Agile', 'Airflow', 'Lean Six Sigma']
    },
    {
        department: 'Business',
        number: 'MGT 6203',
        name: 'Data Analytics for Business',
        university: 'Georgia Tech',
        skills: ['R', 'Python', 'Machine Learning']
    },
    {
        department: 'Computer Science',
        number: 'CSE 6242',
        name: 'Data and Visual Analytics',
        university: 'Georgia Tech',
        skills: ['Python', 'JavaScript', 'Docker', 'D3', 'SQL', 'AWS', 'Azure', 'GCP', 'Flask', 'Tableau', 'Jupyter', 'Hadoop', 'Hive']
    },
    {
        department: 'Statistics',
        number: 'ISYE 7406',
        name: 'Data Mining and Statistical Learning',
        university: 'Georgia Tech',
        skills: ['R', 'Machine Learning']
    },
    {
        department: 'Computer Science',
        number: 'COMP 410',
        name: 'Data Structures',
        university: 'UNC Chapel Hill',
        skills: ['Data Structures', 'Complexity Analysis']
    },
    {
        department: 'Math',
        number: 'MATH 383',
        name: 'Differential Equations',
        university: 'UNC Chapel Hill',
        skills: ['MATLAB', 'Research']
    },
    {
        department: 'English',
        number: 'ENGL 480',
        name: 'Digital Humanities History and Methods',
        university: 'UNC Chapel Hill',
        skills: ['Adobe', 'HTML', 'CSS']
    },
    {
        department: 'Math',
        number: 'MATH 296',
        name: 'Directed Exploration in Mathematics',
        university: 'UNC Chapel Hill',
        skills: ['Tableau', 'Excel', 'R', 'Calculus']
    },
    {
        department: 'Math',
        number: 'MATH 381',
        name: 'Discrete Mathematics',
        university: 'UNC Chapel Hill',
        skills: ['Logic']
    },
    {
        department: 'Italian',
        number: 'ITAL 101',
        name: 'Elementary Italian I',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'Italian',
        number: 'ITAL 102',
        name: 'Elementary Italian II',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'English',
        number: 'ENGL 105',
        name: 'English Composition and Rhetoric',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'Computer Science',
        number: 'COMP 421',
        name: 'Files and Databases',
        university: 'UNC Chapel Hill',
        skills: ['SQL', 'PHP', 'JavaScript', 'HTML', 'CSS']
    },
    {
        department: 'Business',
        number: 'MGT 8813',
        name: 'Financial Modeling',
        university: 'Georgia Tech',
        skills: ['Excel', 'VBA', 'Finance']
    },
    {
        department: 'Computer Science',
        number: 'COMP 401',
        name: 'Foundations of Programming',
        university: 'UNC Chapel Hill',
        skills: ['Java', 'Git']
    },
    {
        department: 'Chemistry',
        number: 'CHEM 101',
        name: 'General Descriptive Chemistry I',
        university: 'UNC Chapel Hill',
        skills: ['Research']
    },
    {
        department: 'Italian',
        number: 'ITAL 203',
        name: 'Intermediate Italian I',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'Statistics',
        number: 'ISYE 6501',
        name: 'Introduction to Analytics Modeling',
        university: 'Georgia Tech',
        skills: ['Python', 'R', 'Optimization']
    },
    {
        department: 'Statistics',
        number: 'STOR 155',
        name: 'Introduction to Data Models and Inference',
        university: 'UNC Chapel Hill',
        skills: ['Excel']
    },
    {
        department: 'Statistics',
        number: 'STOR 320',
        name: 'Introduction to Data Science',
        university: 'UNC Chapel Hill',
        skills: ['R', 'Machine Learning']
    },
    {
        department: 'Statistics',
        number: 'STOR 305',
        name: 'Introduction to Decision Analytics',
        university: 'UNC Chapel Hill',
        skills: ['Excel', 'Optimization']
    },
    {
        department: 'Music',
        number: 'MUSC 145',
        name: 'Introduction to Jazz',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'Statistics',
        number: 'STOR 415',
        name: 'Introduction to Optimization',
        university: 'UNC Chapel Hill',
        skills: ['Excel', 'AMPL', 'Optimization']
    },
    {
        department: 'Sociology',
        number: 'SOCI 172',
        name: 'Introduction to Population Health in the United States',
        university: 'UNC Chapel Hill',
        skills: ['Research']
    },
    {
        department: 'Statistics',
        number: 'STOR 435',
        name: 'Introduction to Probability',
        university: 'UNC Chapel Hill',
        skills: ['Research']
    },
    {
        department: 'Computer Science',
        number: 'COMP 110',
        name: 'Introduction to Programming',
        university: 'UNC Chapel Hill',
        skills: ['TypeScript', 'JavaScript', 'Git']
    },
    {
        department: 'Lifetime Fitness',
        number: 'LFIT 108',
        name: 'Lifetime Fitness Outdoor Sports',
        university: 'UNC Chapel Hill',
        skills: ['Communication']
    },
    {
        department: 'Math',
        number: 'MATH 347',
        name: 'Linear Algebra for Applications',
        university: 'UNC Chapel Hill',
        skills: ['Research']
    },
    {
        department: 'Physics',
        number: 'PHYS 118',
        name: 'Mechanics and Relativity',
        university: 'UNC Chapel Hill',
        skills: ['Research']
    },
    {
        department: 'Statistics',
        number: 'STOR 455',
        name: 'Methods of Data Analysis',
        university: 'UNC Chapel Hill',
        skills: ['R']
    },
    {
        department: 'Computer Science',
        number: 'COMP 455',
        name: 'Models of Languages and Computation',
        university: 'UNC Chapel Hill',
        skills: ['RegEx', 'Complexity Analysis']
    },
    {
        department: 'Computer Science',
        number: 'COMP 426',
        name: 'Modern Web Programming',
        university: 'UNC Chapel Hill',
        skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'REST API']
    },
    {
        department: 'Math',
        number: 'MATH 590',
        name: 'Optimization with Machine Learning Applications',
        university: 'UNC Chapel Hill',
        skills: ['MATLAB', 'Machine Learning', 'Optimization', 'Research']
    },
    {
        department: 'Chemistry',
        number: 'CHEM 101L',
        name: 'Quantitative Chemistry Lab',
        university: 'UNC Chapel Hill',
        skills: ['Research']
    },
    {
        department: 'Statistics',
        number: 'ISYE 6414',
        name: 'Regression Analysis',
        university: 'Georgia Tech',
        skills: ['R', 'Jupyter', 'Machine Learning']
    },
    {
        department: 'Statistics',
        number: 'ISYE 6644',
        name: 'Simulation and Modeling',
        university: 'Georgia Tech',
        skills: ['R', 'Jupyter', 'ARENA', 'Simulation']
    },
    {
        department: 'Statistics',
        number: 'STOR 465',
        name: 'Simulation for Analytics',
        university: 'UNC Chapel Hill',
        skills: ['Excel', 'ARENA', 'Simulation']
    },
    {
        department: 'Statistics',
        number: 'STOR 445',
        name: 'Stochastic Modeling',
        university: 'UNC Chapel Hill',
        skills: ['Simulation', 'Research']
    },
  ];
  
  const courseListEl = document.getElementById('course-list');
  const filterDept = document.getElementById('filter-department');
  const filterUni = document.getElementById('filter-university');
  const filterSkills = document.getElementById('filter-skills');
  
  function getUniqueValues(key) {
    const values = new Set();
    courses.forEach(course => {
      if (key === 'skills') {
        course.skills.forEach(skill => values.add(skill));
      } else {
        values.add(course[key]);
      }
    });
    return Array.from(values).sort();
  }
  
  function populateFilters() {
    const departments = getUniqueValues('department');
    departments.forEach(dept => {
      const option = document.createElement('option');
      option.value = dept;
      option.textContent = dept;
      filterDept.appendChild(option);
    });
  
    const universities = getUniqueValues('university');
    universities.forEach(uni => {
      const option = document.createElement('option');
      option.value = uni;
      option.textContent = uni;
      filterUni.appendChild(option);
    });
  
    const skills = getUniqueValues('skills');
    skills.forEach(skill => {
      const option = document.createElement('option');
      option.value = skill;
      option.textContent = skill;
      filterSkills.appendChild(option);
    });
  }
  
  function renderCourses(filteredCourses) {
    courseListEl.innerHTML = '';
    if (filteredCourses.length === 0) {
      courseListEl.innerHTML = '<p>No courses found matching the filters.</p>';
      return;
    }
  
    filteredCourses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'course-card';
      const barClass = course.university === 'Georgia Tech' ? 'gt-bar' : 'unc-bar';
  
      card.innerHTML = `
        <div class="course-title-bar ${barClass}">
          <h3 class="course-title">${course.name}</h3>
        </div>
        <div class="course-meta">
          <p><strong>University:</strong> ${course.university}</p>
          <p><strong>Department:</strong> ${course.department}</p>
          <p><strong>Course Number:</strong> ${course.number}</p>
          <p><strong>Skills:</strong> ${course.skills.join(', ')}</p>
        </div>
      `;
      courseListEl.appendChild(card);
    });
  }
  
  function filterCourses() {
    const deptVal = filterDept.value;
    const uniVal = filterUni.value;
    const skillVal = filterSkills.value;
  
    const filtered = courses.filter(course => {
      const deptMatch = deptVal ? course.department === deptVal : true;
      const uniMatch = uniVal ? course.university === uniVal : true;
      const skillMatch = skillVal ? course.skills.includes(skillVal) : true;
      return deptMatch && uniMatch && skillMatch;
    });
  
    renderCourses(filtered);
  }
  
  populateFilters();
  renderCourses(courses);
  
  filterDept.addEventListener('change', filterCourses);
  filterUni.addEventListener('change', filterCourses);
  filterSkills.addEventListener('change', filterCourses);
  