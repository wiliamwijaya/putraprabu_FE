import React from "react";
import "../css/whyus.css";
import { Grid, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTag,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Whyus = () => {
  return (
    <Container class="align-items-center py-5" id="whyus">
      <Grid class="container">
        <h2 className="pb-2">Kenapa harus pilih PutraPrabu?</h2>

        <Grid class="row">
          <Grid class="col-12 col-lg-4 d-flex responsif">
            <Grid class="card">
              <Grid class="card-body">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="xl"
                  className="p-2"
                />
                <h5 class="card-title">Sparepart Lengkap</h5>
                <p class="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid class="col-12 col-lg-4 d-flex responsif">
            <Grid class="card">
              <Grid class="card-body">
                <FontAwesomeIcon icon={faTag} size="xl" className="p-2" />
                <h5 class="card-title">Harga Murah</h5>
                <p class="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid class="col-12 col-lg-4 d-flex responsif">
            <Grid class="card">
              <Grid class="card-body">
                <FontAwesomeIcon icon={faUserTie} size="xl" className="p-2" />
                <h5 class="card-title">Mekanik Profesional</h5>
                <p class="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Whyus;
