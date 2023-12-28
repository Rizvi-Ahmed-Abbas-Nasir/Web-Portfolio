export default function ExpandCard() {
    return(
            <div class="containerExpandableCard">
                <div class="card">
                    <div class="face face1 expandable1">
                        <div class="content">
                            <h3>Adaptability</h3>
                        </div>
                    </div>
                    <div class="face face2 expandablef1">
                        <div class="content">
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quascumque minus iste veritatis provident at.</p> */}
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1 expandable1">
                        <div class="content">
                            <h3>Problem solving</h3>
                        </div>
                    </div>
                    <div class="face face2 expandablef1">
                        <div class="content">
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque minus iste veritatis provident at.</p> */}
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1 expandable2">
                        <div class="content">
                            <h3>Debugging</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque minus iste veritatis provident at.</p> */}
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1 expandable2">
                        <div class="content">
                            <h3>Team dedication</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}