import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <a href="https://vk.com/arcos_td" target="_blank" rel="noreferrer">
          <div>
            <svg display="none">
              <symbol id="vk" viewBox="0 0 511.962 511.962">
                <path
                  d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176
			c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76
			c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664
			c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584
			c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424
			c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72
			c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448
			c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536
			c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44
			s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96
			C488.583,400.807,524.359,398.599,507.399,370.471z"
                />
              </symbol>
            </svg>
            <svg className="footer__icon">
              <use xlinkHref="#vk"></use>
            </svg>
          </div>
        </a>
        <a href="https://www.instagram.com/gk_arcos/" target="_blank" rel="noreferrer">
          <div>
            <svg display="none">
              <symbol id="inst" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path
                      d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
			C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
			h192c61.76,0,112,50.24,112,112V352z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
			c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"
                    />
                  </g>
                </g>
              </symbol>
            </svg>
            <svg className="footer__icon">
              <use xlinkHref="#inst"></use>
            </svg>
          </div>
        </a>
        <a
          href="https://www.facebook.com/arcosTD/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <svg display="none">
              <symbol id="fb" viewBox="0 0 512 512">
                <path
                  d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80
			h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z"
                />
              </symbol>
            </svg>
            <svg className="footer__icon">
              <use xlinkHref="#fb"></use>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
