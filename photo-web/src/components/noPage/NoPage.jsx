import "./noPage.scss";
export default function NoPage() {
  return (
    <div className="no-page">
      <p class="not-found"> page not found </p>
      <div class="tipsiz">
        <div class="tipsiz-body">
          <div class="left-arm arm"></div>
          <div class="face">
            <div class="upper-face">
              <div class="element">4</div>
              <div class="element">0</div>
              <div class="element">4</div>
            </div>
            <div class="mouth"></div>
          </div>
          <div class="right-arm arm"></div>
        </div>
      </div>

      <p>
        maybe you want to go <a href="/home">home? </a>
      </p>
    </div>
  );
}
