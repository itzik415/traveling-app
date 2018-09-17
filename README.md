# traveling-app

## Overview:
The Isra-App is a travel guide for tourists wanting to visit Israel. The app provides users with trip options and reviews from previous customers. The app serves ass an advertisement for a pretend travel company.

#### Watch demo:
<a href="https://www.youtube.com/watch?v=YhcJyAnwu-Q&feature=youtu.be" target="_blank">
  <img src="/images/video-image.png" width="400px">
</a>

#### Screenshots:
<div style=" display: flex;">
  <img src="/images/photo-1-1.png" width="300px">
  <img src="/images/photo-1-2.png" width="300px">
  <img src="/images/photo-1-3.png" width="300px">
  <img src="/images/photo-1-4.png" width="300px">
  <img src="/images/photo-1-5.png" width="300px">
</div>

## Technologies used:
 * HTML
 * CSS including Sass
 * Javascript


## Code snippets:

```Sass
.feature-box {
    background-color: rgba($color-white, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
    transition: transform .3s;

    @include respond(tab) {
        padding: 2rem;
    }

    &__icon {
        font-size: 6rem;
        margin-bottom: .5rem;
        display: inline-block;
        background-image: linear-gradient(to right, $color-tertiary-light, $color-tertiary-dark);
        -webkit-background-clip: text;
        color: transparent;

        @include respond(tab) {
            margin-bottom: 0;
        }
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);
    }
}

```
