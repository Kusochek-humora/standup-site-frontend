<script lang="ts" setup>
import LogoComponent from './UI/LogoComponent.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <ul class="footer__list">
        <li class="footer__list-item">
          <LogoComponent class="footer__logo" />
        </li>
        <li class="footer__list-item">
          <address class="footer__list-address">
            Almaty Central Stand up club <br />г. Алматы, ул. Кабанбай Батыра, д.71
            <br />(пересечение с улицей Кунаева)
          </address>
        </li>
        <li class="footer__list-item">
          <a href="#" class="footer__list-link" download="Политика конфидециальности"
            >Политика конфидециальности</a
          >
        </li>
        <li class="footer__list-item">
          <a href="#" class="footer__list-link" download="Публичная оферта">Публичная оферта</a>
        </li>
        <li class="footer__list-item">
          <button class="footer__list-btn" type="button">Правила Клуба</button>
        </li>
        <li class="footer__list-item">
          <button class="footer__list-btn" type="button">по вопросам рекламы</button>
        </li>
      </ul>
    </div>
    <div class="footer__copyright container">
      <p class="footer__copyright-text">&#169; Almaty Central Stand up club, 2024</p>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  padding: 25px 0 20px;
  background-color: rgba(34, 36, 69, 1);
  &__logo {
    margin: 0 0 0 0;
  }
  &__container {
    display: flex;
    align-items: center;
    // justify-content: space-between;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 20px 0;
    gap: 10px 20px;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__list-item {
    @media screen and (max-width: 1024px) {
      &:first-child {
        width: calc(20% - 20px);
      }
      &:nth-child(2) {
        width: calc(80% - 20px);
        br {
          display: none;
        }
      }
    }
    @media screen and (max-width: 768px) {
      &:first-child,
      &:nth-child(2) {
        text-align: center;
        width: 100%;
      }
      &:nth-child(2) {
        br:last-child {
          display: block;
        }
      }
    }
    address,
    button,
    a {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 300;
      color: $white;
    }
  }

  &__copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 14px;
  }

  &__copyright-text {
    font-weight: 300;
    font-family: 'Onest', serif;
  }
}
</style>
