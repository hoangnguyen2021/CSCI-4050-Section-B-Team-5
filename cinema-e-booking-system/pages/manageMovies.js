import { Navbar } from "./components/AdminBar";
import React from "react";
import Link from 'next/link'

export default function ManageMovies() {
    return (
    <div className="manageMovies-container">
        <Navbar />
        <div className="text-center">Manage Movies</div>
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
                <select className="fields2" id="times" name="times">
                <option value="2:00 PM">2:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
              </select>
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
                <select className="fields2" id="times" name="times">
                <option value="1:00 PM">1:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
              </select>
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
            <Link href="/movieForm">
          <button className="newMovieTag"> Add new movie </button>
          </Link>
            </div> 
    );
};