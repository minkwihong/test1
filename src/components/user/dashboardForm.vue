<template>
  <section>
    <div class="dashboard">
      <!-- sat -->
      <div class="sat">

        <!-- score_summary -->
        <div class="score_summary">
          <h2>Score Summary</h2>
          <div class="con">
            <!-- left -->
            <div class="left score_left">
              <h3>Total Estimated Score</h3>
              <ul>
                <li class="total_score">
                  <div>
                    <!-- ajax연결 -->
                    <p>10</p>
                    <p>
                      <img src="@/assets/img/up_score.png" alt="">30
                    </p>
                  </div>
                </li>
                <li>
                  <h4>Reading</h4>
                  <div>
                    <!-- ajax연결 -->
                    <p>0</p>
                    <p>
                      <img src="img/up_score.png" alt=""> 100
                    </p>
                  </div>
                  <a href="reading.html">Begin Practice</a>
                </li>
                <li>
                  <h4>Writing</h4>
                  <div>
                    <!-- ajax연결 -->
                    <p>12</p>
                    <p>
                      <img src="img/down_score.png" alt=""> 40
                    </p>
                  </div>
                  <a href="#">Begin Practice</a>
                </li>
                <li>
                  <h4>Math</h4>
                  <div>
                    <!-- ajax 연결 -->
                    <p>720</p>
                    <p>
                      <img src="img/score_icon.png" alt=""> 0
                    </p>
                  </div>
                  <a href="math.html">Begin Practice</a>
                </li>
              </ul>
            </div>

            <!-- right -->
            <div class="right">
              <div class="scoreSelect">
                <select name="" id="">
                  <option value="total">Total</option>
                  <option value="reading">Reading</option>
                  <option value="writing">Writing</option>
                  <option value="math">Math</option>
                </select>
              </div>
              <div class="scoreBar">
                <span>400</span>
                <div class="scoreBarBg">
                  <span class="avg">Avg</span>
                  <span class="comp">Comp</span>
                  <span class="target">Target</span>
                  <div class="scoreBarMove"></div>
                </div>
                <span>1600</span>
              </div>
              <canvas id="canvas" width="600" height="200"></canvas>
            </div>
          </div>
        </div>

        <script>
          var canvas = document.querySelector('#canvas');
          var ctx = canvas.getContext('2d');

          var barChar = new Chart(canvas, {
            type: "bar",
            data: {
              labels: ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"],
              datasets: [{
                label: 'Score',
                data: [500, 600, 400, 1100, 900, 800, 500],
                backgroundColor: [
                  '#2393fd',
                  '#2393fd',
                  '#2393fd',
                  '#2393fd',
                  '#1571c7',
                ]
              }]
            },
            options: {
              plugins: {
                legend: {
                  display: false
                }
              }
            }
          })
        </script>

        <!-- section analysis -->
        <div class="section_analysis">
          <h2>Section Analysis</h2>
          <div class="con">
            <div class="total">
              <p>Total</p>
              <canvas id="canvas2" width="300" height="250"></canvas>
            </div>
            <div class="reading">
              <p>Reading</p>
              <canvas id="canvas3" width="250" height="250"></canvas>
            </div>
            <div class="writing">
              <p>Writing</p>
              <canvas id="canvas4" width="250" height="250"></canvas>
            </div>
            <div class="math">
              <p>Math</p>
              <canvas id="canvas5" width="250" height="250"></canvas>
            </div>

            <ul>
              <li>
                <span></span>Current score
              </li>
              <li><span></span>Competitor</li>
            </ul>
          </div>

          <script>
            var canvas2 = document.querySelector('#canvas2');
            var ctx2 = canvas.getContext('2d');
            var canvas3 = document.querySelector('#canvas3');
            var ctx3 = canvas.getContext('2d');
            var canvas4 = document.querySelector('#canvas4');
            var ctx4 = canvas.getContext('2d');
            var canvas5 = document.querySelector('#canvas5');
            var ctx5 = canvas.getContext('2d');

            var barChar2 = new Chart(canvas2, {
              type: "radar",
              data: {
                labels: ["READING", "MATH", "WRITING"],
                datasets: [{
                  label: 'Current score',
                  data: [33.3, 33.3, 33.3],
                  pointBackgroundColor: "rgba(0,0,0,0)",
                  pointBorderColor:"rgba(0,0,0,0)",
                  borderColor: "#2393fd",
                },
                  {
                    label: 'Target',
                    data: [0, 1, 2],
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointBorderColor:"rgba(0,0,0,0)",
                    borderColor: "#00c85d"
                  }]
              },
              options: {
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }
            })

            var barChar3 = new Chart(canvas3, {
              type: "radar",
              data: {
                labels: ["Information", "Infographics", "Synthesis", "Ideas"],
                datasets: [{
                  label: 'Current score',
                  data: [1, 2, 1, 4],
                  pointBackgroundColor: "rgba(0,0,0,0)",
                  pointBorderColor:"rgba(0,0,0,0)",
                  borderColor: "#2393fd",
                },
                  {
                    label: 'Target',
                    data: [0, 1, 2, 2],
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointBorderColor:"rgba(0,0,0,0)",
                    borderColor: "#00c85d"
                  }]
              },
              options: {
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }
            })

            var barChar4 = new Chart(canvas4, {
              type: "radar",
              data: {
                labels: ["development", "Organization", "Effective Langauge Use", "sentence Structure", "Convention of Usage", "conventions ofPunctuation"],
                datasets: [{
                  label: 'Current score',
                  data: [1, 2, 1, 4, 6, 1],
                  pointBackgroundColor: "rgba(0,0,0,0)",
                  pointBorderColor:"rgba(0,0,0,0)",
                  borderColor: "#2393fd",
                },
                  {
                    label: 'Target',
                    data: [0, 1, 2, 2, 7, 1],
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointBorderColor:"rgba(0,0,0,0)",
                    borderColor: "#00c85d"
                  }]
              },
              options: {
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }
            })

            var barChar5 = new Chart(canvas5, {
              type: "radar",
              data: {
                labels: ["Heart of Algebra", "Problem Solving and Data Analysis", "Passport to Advanced Math", "Infographics"],
                datasets: [{
                  label: 'Current score',
                  data: [1, 2, 1, 4],
                  pointBackgroundColor: "rgba(0,0,0,0)",
                  pointBorderColor:"rgba(0,0,0,0)",
                  borderColor: "#2393fd",
                },
                  {
                    label: 'Target',
                    data: [0, 1, 2, 2],
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointBorderColor:"rgba(0,0,0,0)",
                    borderColor: "#00c85d"
                  }]
              },
              options: {
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }
            })
          </script>


        </div>

        <!-- Time per Question -->
        <div class="time">
          <h2>Time per Question</h2>
          <div class="con">
            <!-- left -->
            <div class="left time_left">
              <div class="questions">
                <h4>Reading</h4>
                <div>
                  <p>1m 20s</p>
                  <span>/questions</span>
                </div>
              </div>
              <div class="questions">
                <h4>Writing</h4>
                <div>
                  <p>20s</p>
                  <span>/questions</span>
                </div>
              </div>
              <div class="questions">
                <h4>Math</h4>
                <div>
                  <p>4m 20s</p>
                  <span>/questions</span>
                </div>
              </div>
            </div>

            <!-- right -->
            <div class="right time_right">
              <h5>
                Estimated Time Per Question
              </h5>
              <div>
                <!-- ajax연결 -->
                <p>+1m 20s</p>
                <div class="bar">
                  <div class="circle"></div>
                </div>
              </div>
              <div>
                <!-- ajax 연결 -->
                <p>-1m 04s</p>
                <div class="bar">
                  <div class="circle"></div>
                </div>
              </div>
              <div>
                <!-- ajax연결 -->
                <p>+13m 20s</p>
                <div class="bar">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- study management -->
        <div class="study">
          <h2>Study Management</h2>
          <div class="con">
            <!-- left -->
            <div class="left time_left">
              <div class="questions">
                <h4>Parctive Time</h4>
                <div>
                  <p>1m 20s</p>
                </div>
              </div>
              <div class="questions">
                <h4>Practiced Questions</h4>
                <div>
                  <p>42</p>
                  <span>questions</span>
                </div>
              </div>
              <div class="questions">
                <h4>Reviewed Concepts</h4>
                <div>
                  <p>2</p>
                  <span>concepts</span>
                </div>
              </div>
            </div>

            <!-- right -->
            <div class="right">
              <!-- 캘린더 삽입 필요(풀캘린더 무료버전으로도 가능한지?) -->
            </div>
          </div>
        </div>
      </div>

      <!-- control -->
      <div class="control">
        <div class="link">
          <h2>SAT</h2>
          <div class="toggle">
            <span></span><span></span>
          </div>
          <div class="start">
            <ul>
              <li><span>Reading</span> <a href="reading.html">Begin Practice</a></li>
              <li><span>Writing</span> <a href="#">Begin Practice</a></li>
              <li><span>Math</span> <a href="math.html">Begin Practice</a></li>
            </ul>
          </div>
        </div>

        <div class="top">
          Top
        </div>
      </div>
  </section>
</template>

<script></script>
