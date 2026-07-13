<template>
  <div id="sectionFooter">
    <div class="logoWrapper">
      <div id="areaLogo-KyotoU">
        <a href="https://www.kyoto-u.ac.jp/"
          ><img
            id="imageLogo-KyotoU"
            alt="Kyoto University"
            src="~/assets/images/logoKyotoU.png"
        /></a>
      </div>
    </div>
    <div class="organizationInfo">
      <div></div>
      <div>
        <a rel="license" href="https://creativecommons.org/licenses/by/4.0/"
          ><img
            id="imageLogo-CCL"
            alt="Creative Commons License"
            src="~/assets/images/88x31.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sectionFooter {
  margin-top: 2em;
  margin-bottom: 0.5em;
  width: 100%;
  height: 160px;
}

.logoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.organizationInfo {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 12px;
  padding: 0 20px;
}

#areaLogo-KyotoU {
  max-width: 120px;
}

#imageLogo-KyotoU {
  width: 100%;
  height: auto;
}

#areaLogo-CSRS {
  padding-right: 1.5em;
  max-width: 111.3px;
}

#imageLogo-CSRS {
  width: 100%;
  height: auto;
}

#areaLogo-PRIMe {
  padding-right: 1.5em;
  max-width: 215.5px;
}

#imageLogo-PRIMe {
  width: 100%;
  height: auto;
}

#imageLogo-CCL {
  margin-right: 2.5em;
  margin-left: 2.5em;
  width: 88px;
  height: 31px;
}
</style>
