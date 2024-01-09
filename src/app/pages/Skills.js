import { useEffect } from 'react';
import OnScrollAnimation from '../OnScrollAnimmation';




export default function Skills() {

     //On Scroll Animation Function
     useEffect(()=> {
        if (typeof document !== 'undefined') {
          // will run in client's browser only
        //   var hiddenElements = document.querySelectorAll(".hidden");
          var hiddenElement2 = document.querySelectorAll(".hidden2");
          var hiddenElement3 = document.querySelectorAll(".hidden3");
          // console.log(hiddenElements);
           OnScrollAnimation(hiddenElement2)
           OnScrollAnimation(hiddenElement3)
        }
        },[]);

        useEffect(()=> {
        if (typeof document !== 'undefined') {
            const TabContent = document.getElementsByClassName('tab-content');
          
            for(let i = 0; i < TabContent.length; i++){
                TabContent[i].style.display = "none"
                console.log(TabContent[i])
            }

            if(TabContent[9]){
            TabContent[9].style.display = "flex"
            }
        }
        },[]);
        // OnClick to check the radio button
     
        const CheckRadio = (id) =>{
            const sliderRadio = document.getElementsByName("tab");
            const TabContent = document.getElementsByClassName('tab-content');

            sliderRadio.checked = "true"
            console.log(id)
            if(id  == 1){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[9]){
                            TabContent[9].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }
            }
            else if(id  == 2){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[1]){
                            TabContent[1].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }
                
            }
            else if(id  == 3){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[2]){
                            TabContent[2].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else if(id == 4){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[3]){
                            TabContent[3].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else if(id == 5){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[4]){
                            TabContent[4].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else if(id == 6){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[5]){
                            TabContent[5].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else if(id == 7){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[6]){
                            TabContent[6].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else if(id == 8){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[7]){
                            TabContent[7].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else if(id == 9){
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[8]){
                            TabContent[8].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            else{
                if (typeof document !== 'undefined') {
                    for(let i = 0; i < TabContent.length; i++){
                        if(TabContent[i] == TabContent[0]){
                            TabContent[0].style.display = "flex";
                        }
                        else{
                        TabContent[i].style.display = "none"
                        }
                    }
                }

            }
            // console.log(sliderRadio.checked)
        }

       
        



    return(
        <div className='MySkillsCotents'>
          
            <div className="MYSkillTabs hidden2">
           
            <section class="tabs-container">
                <label for="tab1">Languages</label> 
                <label  for="tab2">FrameWorks</label>
                <label for="tab3">Libraries</label>
                <label for="tab4">APIs</label>
                <label for="tab5">Database</label>
                <label for="tab6">Networking</label>
                <label for="tab7">Full stack</label>
                <label for="tab8">AI</label>
                <label for="tab9">GUI App</label>
                <label for="tab-n">Tools</label>
            </section>
         
            <input name="tab" id="tab-n" type="radio" onClick={() => {CheckRadio(10)}}  />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - Tools</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Git&GitHub - CLI</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar26 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>VS Code</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar27 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>PyCharm</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar28 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>IntelliJID</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar29 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>PostMan</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar30 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Android Studio</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar31 progresBar"></div>
                </div>
                    {/* <div className="PHP lanBox"></div> */}
                </div>
            </div>
      
            </section>
                
            <input name="tab" id="tab2" type="radio" onClick={() => {CheckRadio(2)}}  />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - FrameWorks</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Next.js</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar8 progresBar"></div>
                </div>
                <div className="lanBox">
                <div className="ProLanHeading">
                    <h3>Express.js</h3>
                </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar9 progresBar"></div>
                </div>
                <div className="lanBox">
                <div className="ProLanHeading">
                    <h3>Django</h3>
                </div>
                    <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar10 progresBar"></div>
                </div>
                    {/* <div className="Python lanBox">Python</div>
                    <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>
            
            <input name="tab" id="tab3" type="radio" onClick={() => {CheckRadio(3)}}  />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - Libraries</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>React.js</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar11 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Node.js</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar12 progresBar"></div>
                </div>
                    {/* <div className="TypeScript lanBox">TypeScript</div>
                    <div className="Python lanBox">Python</div>
                    <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>
            <input name="tab" id="tab4" type="radio" onClick={() => {CheckRadio(4)}} />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - APIs</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>REST API</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar13 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Soap API</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar14 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>RPC API</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar15 progresBar"></div>
                </div>
                    {/* <div className="Python lanBox">Python</div>
                    <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>
            <input name="tab" id="tab5" type="radio" onClick={() => {CheckRadio(5)}} />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - Database</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>MySQL</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar16 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>PostgreSQL</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar17 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>MangoDB</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar18 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Firebase</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar19 progresBar"></div>
                </div>
                    {/* <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>
            <input name="tab" id="tab6" type="radio" onClick={() => {CheckRadio(6)}} />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - Networking</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>HTTPS Protocals</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar19 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>TCP & FTP</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar20 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>HTTPS Method</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar21 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>DNS</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar22 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>SMTP</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar23 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>IP Address</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar24 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Routing</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar25 progresBar"></div>
                </div>
                </div>
            </div>
            </section>
            <input name="tab" id="tab7" type="radio" onClick={() => {CheckRadio(7)}} />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - Full stack</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>MERN Stack</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar34 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Python with Django</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar35 progresBar"></div>
                </div>
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Spring Boot</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar36 progresBar"></div>
                </div>
                    {/* <div className="Python lanBox">Python</div>
                    <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>
            <input name="tab" id="tab8" type="radio" onClick={() => {CheckRadio(8)}} />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - AI</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>AI Machine Vision</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar32 progresBar"></div>
                </div>
                    {/* <div className="Javascript lanBox">JavaScript</div>
                    <div className="TypeScript lanBox">TypeScript</div>
                    <div className="Python lanBox">Python</div>
                    <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>

            <input name="tab" id="tab9" type="radio"  onClick={() => {CheckRadio(9)}}  />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - GUI Application</h1>
                </div>
                <div className="LanguageGrid">
                <div className="lanBox">
                        <div className="ProLanHeading">
                            <h3>Custom TKinter</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar33 progresBar"></div>
                </div>
                    {/* <div className="Javascript lanBox">JavaScript</div>
                    <div className="TypeScript lanBox">TypeScript</div>
                    <div className="Python lanBox">Python</div>
                    <div className="Java lanBox">Java</div>
                    <div className="C&C++ lanBox">C&C++</div>
                    <div className="PHP lanBox">PHP</div> */}
                </div>
            </div>
            </section>
            <input name="tab" id="tab1" type="radio"  onClick={() => {CheckRadio(1)}}  />
            <section class="tab-content">
            <div className="ProgrammingLan">
                <div className="SkillFirstHeading">
                    <h1>Skill - Programming Languages</h1>
                </div>
                <div className="LanguageGrid">
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>HTML&CSS</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar1 progresBar"></div>
                    </div>
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>JavaScript</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar2 progresBar"></div>
                    </div>
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>TypeScript</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar3 progresBar"></div>
                    </div>
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>Python</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar4 progresBar"></div>
                    </div>
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>Java</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar5 progresBar"></div>
                    </div>
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>C&C++</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar6 progresBar"></div>
                    </div>
                    <div className="HTML&CSS lanBox">
                        <div className="ProLanHeading">
                            <h3>PHP</h3>
                        </div>
                        <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" className="progresBar7 progresBar"></div>
                    </div>
                </div>
            </div>
            </section>
            </div>
        </div>
    );
}