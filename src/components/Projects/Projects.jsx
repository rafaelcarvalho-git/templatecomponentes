import './Projects.css'
import React, { useState } from 'react'
import { projetos, devicons } from './Projects-data.js'

function Projects() {
  return (
    <section id="projects" className="bg text-white">
      <div className="container py-4 pb-5 mb-4">
        <h2 className="text-center fw-bold">Projetos</h2>
        <div id="carouselExampleIndicators" class="carousel slide py-4" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div class="container">
                <div class="row">

                  <div class="col-12 item-carousel text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="projeto" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='z' />

                    </div>
                    <p class="text-white">Portfólio para exibição dos seus produtos/serviços e informações para contato e localização.</p>
                    <div class="btn-group" role="group">
                      <a type="button" href="https://e2s-corretoradeseguros.web.app/" target="_blank" rel="noreferrer noopener" class="btn btn-outline-info">Live</a>
                      <a type="button" href="https://github.com/rafaelcarvalho-git/e2sweb" target="_blank" rel="noreferrer noopener" class="btn btn-info">Código</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>



            {projetos.map((projeto) => {

              return (
                <div key={projeto.id} class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-12 item-carousel text-center">
                        <img class="project-image rounded-4 shadow my-4" src={projeto.image} alt="projeto" />
                        <h5 class="mb-4">{projeto.title}</h5>
                        <div className="dev-icons mb-3">
                          {devicons.map((icon) => {
                            if (icon.id == 1) {
                              return <img width="36px" src={icon.icon} />
                            }
                          }
                          )}
                        </div>
                        <p class="text-white">{projeto.desc}</p>
                        <div class="btn-group" role="group">
                          <a type="button" href={projeto.link} target="_blank" rel="noreferrer noopener" class="btn btn-outline-info">Live</a>
                          <a type="button" href={projeto.code} target="_blank" rel="noreferrer noopener" class="btn btn-info">Código</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )


            }
            )}
          </div>
          <button class="carousel-control-prev pe-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next ps-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;