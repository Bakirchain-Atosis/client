import Arweave from "arweave";
import type { JWKInterface } from "arweave/node/lib/wallet";

export class ArweaveApi {
  private key: JWKInterface = {
    kty: "RSA",
    n: "0bkbgMoRrTozuAGA3ZfKu4xueNVWkuNbMeaHdTHbp3-hSzXMhezECRhXXG7CAG8q0-v7EmZRZdIB_nxaVd0HT7b-t4EpSdCK3jvOzoEHv8fF99FcXLTPfznv9VFxdLnXv6P3l5UFbjDLSZrp0MhButQYR9CkGe7GYYOXHhGR4pCq_WVXZ9c6DBY__dV57_ckH9QLJIeZyaoEk43bYrj3zdCE5pE0oiixD2LdkuFD7-mNyvNm9taF5bLgS_Nu8d4cMnfJVeShULPEYnpQeEjLtDVMqZI_lpgiFyzWk8pua5NG3b-V9qhU-IBLZl07ynaKB3O0NnUmjmhTNAdd48M29jTufQW6KHSL7N2Mk-KlBHVKDPV0nK6H7ZQVdql066SOQzOXWTZ6V_M6DsmJEQ9o1kqWZUvPnpuiyUd9v3HrXVtQ0O23xDJUoUag6jfIQHaqpLWSBIi8xP8DeCEtWPzgX0Q2HyliFZw8B5pV6YhcRVhDpRmCS2fCDg_KdKYvoL02U74NdU0Nhy2_lZ5VOcJgC9v_Oi_6i-5EZSg1qD6LYzbQ2Ztzz_w5q80HedAs7KDmgPdWxr0suzMOk-OF5GnZUHROvac5jMedvallxKjep0POkWXBCnzPhen7jRy_4-oeenos3x8GGrcwRpXMeY9pgODMyP2LSwRc0GQ2xz_57b0",
    e: "AQAB",
    d: "bR20U5PPEqP_mLMfiyuYzW_JYpENFCu6nQHmZHFmaYWcM_dvzBZeAKVrfqoZwgQU8mILJY2auDFF3FRy4822KiF58ZwAEWmxduMDPKohkASu2btSJOHmO7m3QZn4P9UZjZoQDgv44VX9zvQMxxYKLNyBLYw-dUeoa7_9diWKE6lVbbW2fk6a4wMIlFbntJSPdQfsLDtpJmWRL_xUss6uD6V4IEZYbi5hwTGdOvh9Umvf3EI7xh3jWJly3dFwXeNEJHXyiQAFdmmxudMN3ydw5Pf-RRPUhdPtmMU5d3eRb-MWsfUmX0lBvHFzyXSk0ThPpITstJDLWLiq4Z0bmo9NHmZxuZpzWQAq6Vyns0p2TSCbGmtNIQuIp-qQ4pVLRB3gxROU8XW9_YNPeTEk7Z1vhUqTGXN0Ggzyi0-2JCKLEMPfAWnXavIxTUPA23T0H1031xGWbf2vCYY5jqh30zd_54x6PovLxLub-v0Fa55VdX7wW-HL6swx3V29NLlGsnOBokzeXlDWmuKMAB20bO8vNOzQQlFjTrWUMTf1U__--Dd6_OGDi91Xq8NN3bWfryZLuf0ChPOiMuiiXY_1sUBXFkE3bfwJYVjd1n3vSQtY_f7V1Ou6nY6a--8chYHEzP56TAgabtYx1Ak7gVtozOoHR7zjMHk5DqqASMxSgzBl-wE",
    p: "_Lwa2u8TCmu8Pqv2sAIkWTobq0-Leitc3RkdXkO3yeF7Y84GQRn06N7NSZ4LRbUhso2C8d0qZBfkU2L3nPlU1byl3H2bJlwT4gXgJFTSdFQtseKIaE3m_dSbAKSZGeEv4JHnvf8_7DBcWqUoCG9pE5yeZ9ZqEoTLInGJwWiW0gVWJOrktOeSW-oGZjHiwwB9m4knkEbB2UjqoyvAgWqOODTGNer9lQP-u9fOj5V0k-FGo2QAxfCLvaoflX41OIwvJhF798fIGgg5UWpy9rw2GqBuTgK2WKfxLusXUhT5Py-je6tIco3G5mxmiBxRygAec6iqpQ0b36fAmuPwmM3ZnQ",
    q: "1G6-3y7SLbgH13aHltaIL9ItCI9vSXXuQKCQr0l1A1hqgJ_UCr9tBBpDytwXadWPXqCZ3f9EFZKroyUY8M4mvbVnKww09P7Jr_9smClTXIrG4ukK6JzSGlNzNQ6KWKpLXD2IUqsKXeuThEdEUSTLavFzuIFG0nqeRQin74xI89MdaY-Nwykvzp0_BgMYvvxNVuaLsmJrX01xRNuwDRvYYnvo5hv-b-Rje9B6UgtWjSQ3wTZvAnVFOY-XrdHcCzROEI7MBwzDajcmKvtXgIm1d8XbIGVaF94qeuJq9pnO6M1leUE5kpffknvuap49SD2Z1RoMQ4y8LDU5frtGd4i6oQ",
    dp: "rAJqVK96ShFhIVZwowISMxg1VLbiutdgcKpzLoDwSVpJXHgQEabU5Nke5wfFrD_HG3rssChSfaU1JPuqgw-_CWlHiXWDbuwkLCTLlG6Wfc38-6CuLi83E3Lru9hKyy5UI4eqLcnXe6y-boMRaAxLe6mQtiNcNhZjGqIjm5rPa0lug9nKpsUk-6GfkVZKe2WOF5mVb8B4lqXl7AAPGQWoneBtNq0kwZLigH40e8zAdxVPukyJqi45LXDn5hrrpfzi6gnkUZOLQQxv1lWYwQz_1cdyy21VJanHoKMoUBkuOi72GWlN-Yk84f7NGb4MfGrwTs9wtLzjR6kokUKpsZYIkQ",
    dq: "p566_V_0eB6-EUV1t4-P5ivxXM_RACYN2PDZOXa83ebmIpf6uIBThOk0lN0VnGzms8QFpSXGkz8oL5MWGuyPpSF-RnlbT_W7LyRci7QQEvVt-Z3o_aLAJgWy4iqW_19gF2h2KMTNaU55F-ckAOMHn1rl9LANMgeO2un5mQsYhUwP6TtcoKHfFyj8kcHfxNNQM0G2-QqvroNs3Oh8Adv24b7kBq4QFjogRZI68oH_yV7Kn6pT7ZybAtBK3ty4xB6Beo8ybl2j1Cuv8jpg0QvYJKn6PZW7gRnMayo9PFgg65EmgIb25rTvtKYVegtiT55Lw9rJ0oM596gHtfgPokJB",
    qi: "GBtWE58RX3caGKdc-iVBT1KwBxGlXdN8NbnrUfT18t4WXR2q2wBgi6t3BHR8GZCUaLAbqYX0V4AGhFLnaQZ0Szs9tLI8K0UChd8oRiw_Xcr9iHqzRgy4Ti0Zyb5D1v6dL7Tl3bx1OHIM8nX0tAz2Bi1rFCCjqgjd6r36mmFkR01HYuAmn9tcPseohvqURbWxBfDLtsbt0B5DDWF8xsQKHaGKvxLuVYoOe6XYPkRSLOY-2BdGnFN_d03LX7KRUOBwe6tNa6hT9bdo0HMxNfGeobvzR1VkjipLcGINQGno9UuXvY8n91ZzeET491n0_XVLD0r__aQ6cKz13ygZvXAFUg",
  };
  private arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });

  async sendFileTransaction(buffer: string) {
    try {
      let transactionA = await this.arweave.createTransaction(
        {
          data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>',
        },
        this.key
      );
      console.log(transactionA);

      await this.arweave.transactions.sign(transactionA, this.key);

      let uploader = await this.arweave.transactions.getUploader(transactionA);

      while (!uploader.isComplete) {
        await uploader.uploadChunk();
        console.log(
          `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
        );
      }
      const txid = uploader.toJSON().transaction.id;
      return txid;
    } catch (error) {
      console.error(error);
    }
  }
}
