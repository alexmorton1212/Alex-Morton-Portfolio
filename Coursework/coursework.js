const courses = [
    {
        department: 'Math',
        number: 'MATH 521',
        name: 'Advanced Calculus I',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Calculus']
    },
    {
        department: 'Computer Science',
        number: 'COMP 550',
        name: 'Algorithms and Analysis',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Data Structures', 'Complexity Analysis']
    },
    {
        department: 'American Studies',
        number: 'AMST 220',
        name: 'Animal Studies',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Logic', 'Communication']
    },
    {
        department: 'Business',
        number: 'MGT 6748',
        name: 'Applied Analytics Practicum',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['AI', 'Machine Learning', 'TensorFlow', 'GPU', 'LLM', 'Python', 'PyTorch', 'Keras', 'Scikit-Learn']
    },
    {
        department: 'Business',
        number: 'MGT 6748',
        name: 'Applied Analytics Practicum',
        university: 'Georgia Tech',
        roles: ['TA'],
        semesters: 6
    },
    {
        department: 'Computer Science',
        number: 'COMP 590',
        name: 'Beyond Object Oriented Programming',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Go', 'Scala', 'Erlang', 'Elixir']
    },
    {
        department: 'Business',
        number: 'MGT 8803',
        name: 'Business Fundamentals for Analytics',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['Agile', 'Finance']
    },
    {
        department: 'Math',
        number: 'MATH 232',
        name: 'Calculus II',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Calculus']
    },
    {
        department: 'Math',
        number: 'MATH 232',
        name: 'Calculus II',
        university: 'UNC Chapel Hill',
        roles: ['TA'],
        semesters: 1
    },
    {
        department: 'Math',
        number: 'MATH 233',
        name: 'Calculus III',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Calculus']
    },
    {
        department: 'Computer Science',
        number: 'COMP 572',
        name: 'Computational Photography',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['MATLAB']
    },
    {
        department: 'Computer Science',
        number: 'COMP 411',
        name: 'Computer Organization',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['C', 'Assembly']
    },
    {
        department: 'Computer Science',
        number: 'COMP 435',
        name: 'Computer Security Concepts',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['C', 'Linux']
    },
    {
        department: 'Computer Science',
        number: 'CSE 6040',
        name: 'Computing for Data Analytics',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['Python', 'Spark', 'SQL', 'Pandas', 'NumPy']
    },
    {
        department: 'English',
        number: 'CMPL 89',
        name: 'Curiosity and Birth of the Imagination',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'Business',
        number: 'MGT 8823',
        name: 'Data Analysis for Continuous Improvement',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['Excel', 'Agile', 'Airflow', 'Lean Six Sigma']
    },
    {
        department: 'Business',
        number: 'MGT 6203',
        name: 'Data Analytics for Business',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['R', 'Python', 'Machine Learning']
    },
    {
        department: 'Business',
        number: 'MGT 6203',
        name: 'Data Analytics for Business',
        university: 'Georgia Tech',
        roles: ['TA'],
        semesters: 3
    },
    {
        department: 'Computer Science',
        number: 'CSE 6242',
        name: 'Data and Visual Analytics',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['Python', 'JavaScript', 'Docker', 'D3', 'SQL', 'AWS', 'Azure', 'GCP', 'Tableau']
    },
    {
        department: 'Statistics',
        number: 'ISYE 7406',
        name: 'Data Mining and Statistical Learning',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['R', 'Machine Learning']
    },
    {
        department: 'Computer Science',
        number: 'COMP 410',
        name: 'Data Structures',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Data Structures', 'Complexity Analysis']
    },
    {
        department: 'Math',
        number: 'MATH 383',
        name: 'Differential Equations',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['MATLAB', 'Research']
    },
    {
        department: 'English',
        number: 'ENGL 480',
        name: 'Digital Humanities History and Methods',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Adobe', 'HTML', 'CSS']
    },
    {
        department: 'Math',
        number: 'MATH 296',
        name: 'Directed Exploration in Mathematics',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Tableau', 'Excel', 'R', 'Calculus']
    },
    {
        department: 'Math',
        number: 'MATH 381',
        name: 'Discrete Mathematics',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Logic']
    },
    {
        department: 'Italian',
        number: 'ITAL 101',
        name: 'Elementary Italian I',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'Italian',
        number: 'ITAL 102',
        name: 'Elementary Italian II',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'English',
        number: 'ENGL 105',
        name: 'English Composition and Rhetoric',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'Math',
        number: 'MATH 118',
        name: 'Exploration of Modern Mathematics',
        university: 'UNC Chapel Hill',
        roles: ['TA'],
        semesters: 1
    },
    {
        department: 'Computer Science',
        number: 'COMP 421',
        name: 'Files and Databases',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['SQL', 'PHP', 'JavaScript', 'HTML', 'CSS']
    },
    {
        department: 'Business',
        number: 'MGT 8813',
        name: 'Financial Modeling',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['Excel', 'VBA', 'Finance']
    },
    {
        department: 'Computer Science',
        number: 'COMP 401',
        name: 'Foundations of Programming',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Java', 'Git']
    },
    {
        department: 'Chemistry',
        number: 'CHEM 101',
        name: 'General Descriptive Chemistry I',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Research']
    },
    {
        department: 'Italian',
        number: 'ITAL 203',
        name: 'Intermediate Italian I',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'Statistics',
        number: 'ISYE 6501',
        name: 'Introduction to Analytics Modeling',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['Python', 'R', 'Optimization']
    },
    {
        department: 'Statistics',
        number: 'STOR 155',
        name: 'Introduction to Data Models and Inference',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Excel']
    },
    {
        department: 'Statistics',
        number: 'STOR 320',
        name: 'Introduction to Data Science',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['R', 'Machine Learning']
    },
    {
        department: 'Statistics',
        number: 'STOR 305',
        name: 'Introduction to Decision Analytics',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Excel', 'Optimization']
    },
    {
        department: 'Music',
        number: 'MUSC 145',
        name: 'Introduction to Jazz',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'Statistics',
        number: 'STOR 415',
        name: 'Introduction to Optimization',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Excel', 'AMPL', 'Optimization']
    },
    {
        department: 'Sociology',
        number: 'SOCI 172',
        name: 'Introduction to Population Health in the United States',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Research']
    },
    {
        department: 'Statistics',
        number: 'STOR 435',
        name: 'Introduction to Probability',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Research']
    },
    {
        department: 'Computer Science',
        number: 'COMP 110',
        name: 'Introduction to Programming',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['TypeScript', 'JavaScript', 'Git']
    },
    {
        department: 'Lifetime Fitness',
        number: 'LFIT 108',
        name: 'Lifetime Fitness Outdoor Sports',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Communication']
    },
    {
        department: 'Math',
        number: 'MATH 347',
        name: 'Linear Algebra for Applications',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Research']
    },
    {
        department: 'Physics',
        number: 'PHYS 118',
        name: 'Mechanics and Relativity',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Research']
    },
    {
        department: 'Statistics',
        number: 'STOR 455',
        name: 'Methods of Data Analysis',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['R']
    },
    {
        department: 'Computer Science',
        number: 'COMP 455',
        name: 'Models of Languages and Computation',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['RegEx', 'Complexity Analysis']
    },
    {
        department: 'Computer Science',
        number: 'COMP 426',
        name: 'Modern Web Programming',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['JavaScript', 'HTML', 'CSS', 'Git', 'REST API']
    },
    {
        department: 'Math',
        number: 'MATH 590',
        name: 'Optimization with Machine Learning Applications',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['MATLAB', 'Machine Learning', 'Optimization', 'Research']
    },
    {
        department: 'Chemistry',
        number: 'CHEM 101L',
        name: 'Quantitative Chemistry Lab',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Research']
    },
    {
        department: 'Statistics',
        number: 'ISYE 6414',
        name: 'Regression Analysis',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['R', 'Jupyter', 'Machine Learning']
    },
    {
        department: 'Statistics',
        number: 'ISYE 6644',
        name: 'Simulation and Modeling',
        university: 'Georgia Tech',
        roles: ['Student'],
        skills: ['R', 'Jupyter', 'ARENA', 'Simulation']
    },
    {
        department: 'Statistics',
        number: 'STOR 465',
        name: 'Simulation for Analytics',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Excel', 'ARENA', 'Simulation']
    },
    {
        department: 'Statistics',
        number: 'STOR 445',
        name: 'Stochastic Modeling',
        university: 'UNC Chapel Hill',
        roles: ['Student'],
        skills: ['Simulation', 'Research']
    },
  ];
  
  const courseListEl = document.getElementById('course-list');
  const courseCountEl = document.getElementById('course-count');
  const filterEls = document.querySelectorAll('.filter');

  // Selected values per filter. Within a filter values are OR'd, across filters AND'd.
  const selected = {
    university: new Set(),
    department: new Set(),
    roles: new Set(),
    skills: new Set()
  };

  function courseValues(course, key) {
    const value = course[key];
    if (value === undefined) return [];
    return Array.isArray(value) ? value : [value];
  }

  function matchesFilter(course, key) {
    const values = selected[key];
    return values.size === 0 || courseValues(course, key).some(value => values.has(value));
  }

  function matchesAll(course, exceptKey) {
    return Object.keys(selected).every(key => key === exceptKey || matchesFilter(course, key));
  }

  function getUniqueValues(key) {
    const values = new Set();
    courses.forEach(course => courseValues(course, key).forEach(value => values.add(value)));
    return Array.from(values).sort();
  }

  function populateFilters() {
    filterEls.forEach(filterEl => {
      const key = filterEl.dataset.key;
      const optionsEl = filterEl.querySelector('.filter-options');

      getUniqueValues(key).forEach(value => {
        const option = document.createElement('label');
        option.className = 'filter-option';
        option.innerHTML = `
          <input type="checkbox" />
          <span class="filter-option-name"></span>
          <span class="filter-option-count"></span>
        `;
        option.querySelector('.filter-option-name').textContent = value;
        const checkbox = option.querySelector('input');
        checkbox.value = value;
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            selected[key].add(value);
          } else {
            selected[key].delete(value);
          }
          update();
        });
        optionsEl.appendChild(option);
      });

      filterEl.querySelector('.filter-clear').addEventListener('click', () => {
        selected[key].clear();
        update();
      });

      const toggle = filterEl.querySelector('.filter-toggle');
      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        closeMenus();
        if (!isOpen) openMenu(filterEl);
      });
    });
  }

  function openMenu(filterEl) {
    filterEl.querySelector('.filter-toggle').setAttribute('aria-expanded', 'true');
    filterEl.querySelector('.filter-menu').hidden = false;
  }

  function closeMenus() {
    filterEls.forEach(filterEl => {
      filterEl.querySelector('.filter-toggle').setAttribute('aria-expanded', 'false');
      filterEl.querySelector('.filter-menu').hidden = true;
    });
  }

  // Grey out options that would leave no courses given the other filters, and show counts
  function updateFilterOptions() {
    filterEls.forEach(filterEl => {
      const key = filterEl.dataset.key;
      const label = filterEl.querySelector('.filter-label').textContent;
      const pool = courses.filter(course => matchesAll(course, key));

      filterEl.querySelectorAll('.filter-option').forEach(option => {
        const checkbox = option.querySelector('input');
        const count = pool.filter(course => courseValues(course, key).includes(checkbox.value)).length;
        const isChecked = selected[key].has(checkbox.value);

        checkbox.checked = isChecked;
        // Checked options stay clickable so they can always be unchecked
        checkbox.disabled = count === 0 && !isChecked;
        option.classList.toggle('unavailable', count === 0);
        option.querySelector('.filter-option-count').textContent = count;
      });

      const values = Array.from(selected[key]);
      const summary = values.length === 0 ? 'All'
        : values.length === 1 ? values[0]
        : `${values.length} selected`;
      const toggle = filterEl.querySelector('.filter-toggle');
      toggle.textContent = summary;
      toggle.setAttribute('aria-label', `${label}: ${summary}`);
      filterEl.classList.toggle('active', values.length > 0);
    });
  }

  function renderCourses(filteredCourses) {
    courseListEl.innerHTML = '';
    courseCountEl.textContent = filteredCourses.length === courses.length
      ? `${courses.length} courses`
      : `Showing ${filteredCourses.length} of ${courses.length} courses`;

    if (filteredCourses.length === 0) {
      courseListEl.innerHTML = '<p class="no-results">No courses found matching the filters.</p>';
      return;
    }

    filteredCourses.forEach(course => {
      const card = document.createElement('article');
      const isGT = course.university === 'Georgia Tech';
      const isTA = course.roles.includes('TA');
      card.className = `course-card ${isGT ? 'gt' : 'unc'}${isTA ? ' is-ta' : ''}`;
      const logo = isGT ? '../Images/gt-logo.svg.png' : '../Images/unc-logo.png';
      const logoAlt = `${course.university} Seal`;

      card.innerHTML = `
        ${isTA ? '<span class="role-badge">TA</span>' : ''}
        <div class="course-card-top">
          <span class="course-logo-tile">
            <img src="${logo}" alt="${logoAlt}" class="course-logo" loading="lazy" />
          </span>
          <div>
            <p class="course-number">${course.number} &middot; ${course.department}</p>
            <h3 class="course-title">${course.name}</h3>
          </div>
        </div>
        ${isTA
          ? `<ul class="skill-list"><li>${course.semesters} ${course.semesters === 1 ? 'semester' : 'semesters'}</li></ul>`
          : `<ul class="skill-list">${course.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>`}
      `;
      courseListEl.appendChild(card);
    });
  }
  
  function update() {
    updateFilterOptions();
    renderCourses(courses.filter(course => matchesAll(course)));
  }

  populateFilters();
  update();

  document.addEventListener('click', event => {
    if (!event.target.closest('.filter')) closeMenus();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenus();
  });
