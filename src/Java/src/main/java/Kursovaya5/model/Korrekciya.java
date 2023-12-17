package Kursovaya5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Коррекция
 */
@Entity(name = "IISKursovaya5Коррекция")
@Table(schema = "public", name = "Коррекция")
public class Korrekciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Кадрирование")
    private Boolean кадрирование;

    @Column(name = "ЧБЦвет")
    private Boolean чбцвет;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PechatFoto")
    @Convert("PechatFoto")
    @Column(name = "ПечатьФото", length = 16, unique = true, nullable = false)
    private UUID _pechatfotoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PechatFoto", insertable = false, updatable = false)
    private PechatFoto pechatfoto;


    public Korrekciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getКадрирование() {
      return кадрирование;
    }

    public void setКадрирование(Boolean кадрирование) {
      this.кадрирование = кадрирование;
    }

    public Boolean getЧБЦвет() {
      return чбцвет;
    }

    public void setЧБЦвет(Boolean чбцвет) {
      this.чбцвет = чбцвет;
    }


}