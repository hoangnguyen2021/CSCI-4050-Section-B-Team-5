import { Navbar } from "../components/AdminBar";
import React from 'react'
import Link from 'next/link'

export default function ManageMovies() {

  return (
    <div className="manageMovies-container">
      <Navbar />
      <div className="text-center"></div>
      <table className="table" id="movieTable">
        <tbody>
          <tr>
            <th>Threatre Number</th>
            <th>Showtime</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Cast</th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            {/*Couldn't figure out drop down, may need reatc hook*/}
            <td>2:00PM</td>
            <td>Bullet Train</td>
            <td>Action</td>
            <td>Five Assassins aboard a fast moving
              bullet train find out their missions have
              something in common
            </td>
            <td>Brad Pitt,
              Joey King,
              Aaron Taylor-Johson...</td>
            <td><button id="button" type="submit">Delete</button></td>
          </tr>
          <tr>
            <td>2</td>
            {/*Couldn't figure out drop down, may need reatc hook*/}
            <td>2:00PM</td>
            <td>Moonlight</td>
            <td>Drama</td>
            <td>A young African-American man grapples with his identity and sexuality while
              experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.
            </td>
            <td>Mahershala Ali,
              Naomi Harris,
              Trevante Rhodes...</td>
            <td><button id="button" type="submit">Delete</button></td>
          </tr>
        </tbody>
      </table>
      <Link href="/movie-form">
        <button className="newMovieTag"> Add new movie </button>
      </Link>
    </div>
  );
};
