import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/SlidingPuzzle.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sbang002/SlidingTilePuzzleSolver">Sliding Tile Puzzle Solver</a></h3>
											<span>Machine Learning</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/RayTracing.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sbang002/RayTracing_CS130/blob/master/README.md">Ray Tracing</a></h3>
											<span>Computer Graphics</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/SpaceInvaders.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sbang002/SpaceInvaders_120B">Space Invaders on a Bredboard</a></h3>
											<span>Game</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/sbang002" className="btn btn-primary btn-lg btn-load-more"> Check out my GitHub for more Projects </a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
